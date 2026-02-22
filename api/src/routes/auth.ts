import express from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import type { AuthUser } from "../types/types.ts"
import { prisma } from "../prisma.ts"
import type { Response } from 'express'

const router = express.Router()

const COOKIE_OPTIONS = {
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? "none" as const : "lax" as const,
  path: "/" 
}

const COOKIE_KEYS = {
  TOKEN: "token",
  NAME: "userName",
  REFRESH: "refreshToken",
} as const

function generateAccessToken(user: AuthUser) {
  const secret = process.env.ACCESS_TOKEN_SECRET
  if (!secret) {
    throw new Error("ACCESS TOKEN CANNOT BE UNDEFINED")
  }

  return jwt.sign(user, secret, { expiresIn: "15m" })
}

async function generateRefreshToken(user: AuthUser, id: number) {
    const secret = process.env.REFRESH_TOKEN_SECRET
    if (!secret) {
      throw new Error("ACCESS TOKEN CANNOT BE UNDEFINED")
    }
    const refreshToken = jwt.sign(user, secret)

    try {
      // only keep 1 refresh token active
      await prisma.refreshToken.deleteMany({
        where: { userId: id}
      });

      const token = await prisma.refreshToken.create({
        data: {
          token: refreshToken,
          userId: id,
          expiresAt: new Date(Date.now() + 14*24*60*60*1000) // 14 days
        }
      })
      return token.token

    } catch (error) {
      console.error(error)
    }
}

async function setAuthCookies(user: {email: string, id: number}, res: Response) {
  const accessToken = generateAccessToken(user)
  const refreshToken = await generateRefreshToken(user, user.id)

  res.cookie(COOKIE_KEYS.TOKEN, accessToken, {
    ...COOKIE_OPTIONS,
    maxAge: 15 * 60 * 1000,  // 15 minutes
  })
  
  res.cookie(COOKIE_KEYS.REFRESH, refreshToken, {
    ...COOKIE_OPTIONS,
    maxAge: 30 * 24 * 60 * 60 * 1000,  // 30 days
  })    
}

router.post("/signup", async (req, res) => {
  const {email, password, firstName} = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        email: email,
        passwordHash: hashedPassword,
        firstName: firstName
      }
    })

    const user = {email, id: newUser.id}
    await setAuthCookies(user, res)

    return res.status(201).json({name: firstName})

  } catch (error: any) {
    return (error.code === 'P2002') ?
      res.status(409).json({ error: "Email already exists"}) : 
      res.status(500).json({ error: "Signup failed" })
  }
})

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password

    let userInfo = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        passwordHash: true,
        firstName: true
      }
    })

    if (!userInfo) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const isValid = await bcrypt.compare(password, userInfo.passwordHash)

    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" })
    }
      
    const user = {email, id: userInfo.id}
    await setAuthCookies(user, res)

    return res.status(201).json({name: userInfo.firstName})

  } catch {
    return res.status(500).send()
  }
})

router.post("/token", async (req, res) => {
  const secret = process.env.REFRESH_TOKEN_SECRET
  if (!secret) {
    throw new Error("ACCESS TOKEN CANNOT BE UNDEFINED")
  }

  const refreshToken = req.cookies[COOKIE_KEYS.REFRESH]
  if (!refreshToken) {
    return res.sendStatus(401)
  }

  if (!await prisma.refreshToken.findUnique({ where: { token: refreshToken } } )) {
    return res.sendStatus(403)
  }

  try {
    const decoded = jwt.verify(refreshToken, secret)

    if (typeof decoded === "string") {
      return res.sendStatus(403)
    }

    const user = decoded as AuthUser
    const accessToken = generateAccessToken(user)

    res.cookie(COOKIE_KEYS.TOKEN, accessToken, {
      ...COOKIE_OPTIONS,
      maxAge: 15 * 60 * 1000,  // 15 minutes
    })
  
    return res.sendStatus(201)
  } catch {
    return res.sendStatus(403)
  }
})

router.delete("/logout", async (req, res) => {
  await prisma.refreshToken.deleteMany({
    where: {
      token: req.body.token
    }
  })

  res.clearCookie(COOKIE_KEYS.TOKEN, COOKIE_OPTIONS)
  res.clearCookie(COOKIE_KEYS.REFRESH, COOKIE_OPTIONS)

  res.sendStatus(204)
})

router.post("/email", async (req, res) => {
  const email = req.body.email
 
  if (!email) {
    return res.status(400).json({error: "Email required"})
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    res.json({exists: user})

  } catch {
    return res.status(500).json({error: "internal server error"})
  }
})

export default router