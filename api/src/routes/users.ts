import express from "express"
import { authenticateToken } from "../middleware/authenticateToken.ts"
import { prisma } from "../prisma.ts"

const router = express.Router()

router.get("/me", authenticateToken, async (req, res) => {
  const id = req.user.id

  try {
    const info = await prisma.user.findUnique({
      where: { id },
      select: {
        firstName: true
      }
    })

    if (!info) {
      return res.status(404).json({ message: "User not found" })
    }
    return res.json({name: info.firstName})
  
  } catch (error) {
    console.log("Error fetching user:", error)
    return res.status(500)
  }
})

export default router