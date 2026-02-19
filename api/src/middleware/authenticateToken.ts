import { type RequestHandler } from "express"
import jwt, { type JwtPayload, type VerifyErrors } from "jsonwebtoken"

export const authenticateToken: RequestHandler = (req, res, next) => {
  const secret = process.env.ACCESS_TOKEN_SECRET
  if (!secret) {
    throw new Error("ACCESS TOKEN CANNOT BE UNDEFINED")
  }
 
  const token = req.cookies.token
  if (token == null) {
    return res.sendStatus(401)
  }

  jwt.verify(token, secret, (err, user) => {
    if (err || !user || typeof user == "string") {
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
}