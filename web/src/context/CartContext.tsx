'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { CartItemWithDetails } from "@shared"
import { useAuth } from "./AuthContext"
import { useRouter } from "next/navigation"
import { API_URL } from '@lib/constants';


interface CartContextValue {
  cartItems: CartItemWithDetails[]
  updateCart: (productId: number, quantity: number) => void
  deleteCartItem: (productId: number) => void
  isUpdating: boolean
  getSubtotal: () => number
  clearCartLocal: () => void
  isLoading: boolean
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode } ) => {
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(true)

  const router = useRouter()
  const { user } = useAuth()

  const getSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const cost = Number(item.product.cost)
      const quantity = item.quantity
      return acc + (cost * quantity)
    }, 0)
  }

  useEffect(() => {
    if (!user) {
      setIsLoading(false)
      return 
    }

    const fetchCart = async () => {
      try {
        const res = await fetch(`${API_URL}/cart/view`, {
          credentials: "include",
        })
        const data: CartItemWithDetails[] = await res.json()
        setCartItems(data)
      } catch (err) {
        console.error("Cart fetch failed", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCart()
  }, [])

  async function updateCart(productId: number, quantity: number) {

    if (!user) {
      router.push("/login")
    }

    setIsUpdating(true)
    
    try {

      const res = await fetch(`${API_URL}/cart/update`, {
        method: "PATCH",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity,
        })
      })

      const updatedItem = await res.json()

      setCartItems(prev => {
        const exists = prev.find(i => i.productId === productId)

        if (updatedItem.quantity <= 0) {
          return prev.filter(i => i.productId !== productId)
        } else if (exists) {
          return prev.map(i => i.productId === productId ? updatedItem : i)
        }
        return [...prev, updatedItem]
      })
    } catch (error) {
      console.log(error)
      console.error("unable to update item")
    } finally {
      setIsUpdating(false)
    }
  }

  async function deleteCartItem(productId: number) {
    setIsUpdating(true)
    try {
      const res = await fetch(`${API_URL}/cart/remove`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
        })
      })

      const items = setCartItems(prev => {
        return prev.filter(i => i.productId !== productId)
      })
      
    } catch (error) {
      console.error("internal server error, ")
    } finally {
      setIsUpdating(false)
      console.log(cartItems)
    }
  }

  function clearCartLocal() {
    setCartItems([])
  }

  return (
    <CartContext.Provider 
      value={ {cartItems, updateCart, deleteCartItem, isUpdating, getSubtotal, clearCartLocal, isLoading} }>
        {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}