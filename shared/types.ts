import { Prisma } from "../api/src/generated/client"

import type {
  Product,
  CartItems,
  User,
  Order
} from "../api/src/generated/client.ts"

export type { Product, CartItems, User, Order }

export type ProductWithImages = Prisma.ProductGetPayload<{
  include: { productImages: true }
}>

export type CartItemWithDetails = Prisma.CartItemsGetPayload<{
  include: {
    product: {
      include: { productImages: true }
    }
  }
}>

export interface CartUpdatePayload {
  ProductId: number,
  change: number
}

export interface ApiErrorResponse {
  error: string
  code?: string
}

export interface CartActionResponse {
  message: string
  quantity: number
}