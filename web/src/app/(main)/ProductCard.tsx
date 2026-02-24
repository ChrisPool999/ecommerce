'use client'

import { ProductWithImages } from "@shared"
import { Button } from "@/components/ui/Button"
import { RatingStars } from "@/components/ui/RatingStars";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { QuantityStepper } from "@ui/QuantityStepper";
import { formatCurrency } from "@lib/utils";
import { API_URL } from "@lib/constants";

interface ProductProps {
  product: ProductWithImages,
  isPriority: boolean
}

function formatReviews(n: number) {
    if (n < 1000) {
      return n
    }
    
    n = Math.floor(n / 1000) 
    
    return n + "k"
}


// API_URL = fetchcalls   nextJS needs to use API service,  client needs to use localhost



export function ProductCard( {product, isPriority}: ProductProps ) {
  const { updateCart, cartItems, isLoading} = useCart()

  const cartItem = cartItems.find(i => i.productId === product.id)

  return (
    <article className="w-90 outline-1 outline-gray-100 rounded-2xl shadow-md tracking-tightest">
      <div className="relative w-full h-60 bg-gray-100">
        
        { isLoading ? <></> : 
          <Image 
            alt="product photo" 
            src={`${API_URL}${product.productImages[0].imageUrl}`}
            fill
            className="object-contain mix-blend-multiply rounded-xl"
            sizes={"100%"}
            priority={isPriority}
            unoptimized
          ></Image>
        }

      </div>
      <section className="spacing-left-s mb-2 p-3">
        <h2 aria-label={product.name}></h2>
        <span className="spacing-top-s text-sm line-clamp-2">{product.name}</span>
        <div className="spacing-top-s flex items-center gap-1">
          <span className="font-medium">{product.rating}</span>
          <div className="flex items-center">
              <RatingStars rating={product.rating}></RatingStars>
          </div>
          <span className="text-sm text-black-400">{formatReviews(product.reviews)}</span>
        </div>
        <span className="block spacing-top-s text-md font-bold pt-7">{formatCurrency(Number(product.cost))}</span>
        <div className="spacing-top-s w-1/2">
          {
            cartItem ? (
              <QuantityStepper variant="transparentDark" textSize="heavy" productId={product.id} quantity={cartItem.quantity} ></QuantityStepper>
            ) : (
              <Button variant="sleek" onClick={() => updateCart(product.id, 1)}>
                <span>Add to cart</span>
              </Button>
            )
          }
        </div>
      </section>
    </article>
  )
}