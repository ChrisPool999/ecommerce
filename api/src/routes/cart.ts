import express from "express"
import { authenticateToken } from "../middleware/authenticateToken.ts"
import { prisma } from "../prisma.ts"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"
import type { CartItems } from "../../../shared/types.ts"
import type { CartItemWithDetails } from "../../../shared/types.ts"

const router = express.Router()

router.get("/view", authenticateToken, async (req, res) => {
  const userId = req.user.id

  try {
    const cart: CartItemWithDetails[] | null = await prisma.cartItems.findMany({
      where: {userId},
      include: {
        product: {
          include: {
            productImages: true
          }
        }
      },
    })
    return res.status(201).json(cart)

  } catch (error) {
    console.error(error)
    return res.status(500).json({error: "Failed to fetch cart"})
  }
})

router.delete("/remove", authenticateToken, async (req, res) => {
  const productId = req.body.productId
  const userId = req.user.id

  if (!productId) {
    return res.status(400).json({ error: "Missing ProductId or quantity"})
  }

  try {
    await prisma.cartItems.delete({
      where: { userId_productId: {userId, productId} },
    })

    return res.sendStatus(201)

  } catch (error) {

    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code == "P2025") {
        return res.sendStatus(204)
      }
    }

    console.error(error)
    return res.status(500).json({error: "failed to remove cart item"})
  } 
})

router.patch("/update", authenticateToken, async (req, res) => {
  const {productId, quantity} = req.body
  const userId = req.user.id

  if (!productId || !quantity) {
    return res.status(400).json({ error: "Missing ProductId or quantity"})
  }
  
  // can remove or add quantity
  if (quantity < -100 || quantity > 100 || typeof quantity != 'number') {
    return res.status(400).json({ error: "Invalid input"})
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
    
      const cartItem: CartItems | null = await prisma.cartItems.findUnique({
        where: {userId_productId: {userId: userId, productId: productId}, }
      })

      const currentQty = cartItem?.quantity ?? 0
      const newQty = currentQty + quantity

      if (newQty < 0) {
        throw new Error("NEGATIVE_QUANTITY")
      }

      if (newQty === 0) {
        await tx.cartItems.deleteMany({
          where: { userId, productId },
        })
        return { message: "Item removed", quantity: 0 }
      }

      return await tx.cartItems.upsert({
        where: { userId_productId: {userId, productId} },
        include: {
          product: {
            include: {
              productImages: true
            }
          }
        },
        update: { quantity: { increment: quantity } },
        create: { userId, productId, quantity }
      })
    })
    return res.status(200).json(result)

    } catch (error: any) {
      if (error.message === "NEGATIVE_QUANTITY") {
        return res.status(400).json({error: "Cannot have negative quantity" })
      }

    console.error("Transaction failed: ", error)
    return res.status(500).json({error: "Internal server error" })
  }
})

export default router