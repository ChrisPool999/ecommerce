import express from "express"
import { prisma } from "../prisma.ts"
import type { ProductWithImages } from "../../../shared/types.ts"

const router = express.Router()

router.get("/products", async (_req, res) => {
  try {
    const products: ProductWithImages[] = await prisma.product.findMany({
      include: {
        productImages: true
      }
    });

    res.json(products);
  } catch (e) {
    console.error("Prisma error:", e);
    res.status(500).json({
      error: "failed to fetch products",
      details: e
    });
  }
});

export default router