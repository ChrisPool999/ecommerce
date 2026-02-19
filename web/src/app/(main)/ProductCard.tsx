'use client'

import { ProductWithImages } from "@shared"
import { Button } from "@/components/ui/Button"
import { RatingStars } from "@/components/ui/RatingStars";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { QuantityStepper } from "@ui/QuantityStepper";
import { formatCurrency } from "@lib/utils";

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

export function ProductCard( {product, isPriority}: ProductProps ) {
  const { updateCart, cartItems} = useCart()

  const cartItem = cartItems.find(i => i.productId === product.id)

  return (
    <article className="w-60 outline-1 outline-gray-200 spacing-left-m spacing-top-m">
      <div className="relative w-full h-60 bg-gray-100">
        <Image 
          alt="product photo" 
          src={`http://localhost:5000${product.productImages[0].imageUrl}`}
          fill
          className="object-contain mix-blend-multiply"
          sizes={"100%"}
          priority={isPriority}
          unoptimized
        ></Image>
      </div>
      <section className="spacing-left-s mb-2">
        <h2 aria-label={product.name}></h2>
        <span className="line-clamp-3 spacing-top-s">{product.name}</span>
        <div className="spacing-top-s flex items-center gap-1">
          <span className="font-medium">{product.rating}</span>
          <div className="flex items-center">
              <RatingStars rating={product.rating}></RatingStars>
          </div>
          <span className="text-sm">{formatReviews(product.reviews)}</span>
        </div>
        <span className="block spacing-top-s text-lg font-semibold">{formatCurrency(Number(product.cost))}</span>
        <div className="spacing-top-s w-1/2">
          {
            cartItem ? (
              <QuantityStepper productId={product.id} quantity={cartItem.quantity} ></QuantityStepper>
            ) : (
              <Button onClick={() => updateCart(product.id, 1)}>
                <span>Add to cart</span>
              </Button>
            )
          }
        </div>
      </section>
    </article>
  )
}