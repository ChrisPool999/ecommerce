import express from "express"
import { authenticateToken } from "../middleware/authenticateToken.ts"
import { prisma } from "../prisma.ts"

const router = express.Router()

// RETURN ORDER ID 
router.post("/", authenticateToken, async (req, res) => {
  const userId = req.body.userId

  // TODO: actually post order to db after deployment...
  const orderId: string = Math.random().toString(36).substring(2, 8);

  try {
    await prisma.$transaction(async (tx) => {
      await tx.cartItems.deleteMany({
        where: { userId }
      })
    })
    return res.status(201).json({
      orderId,
      message: "Order simulation successful"
    })
  } catch (e) {
    console.error(e)
    return res.status(500).json("internal server error")
  }
}) 

export default router