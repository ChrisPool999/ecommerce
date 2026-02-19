'use client'

import Link from "next/link";
import { formatCurrency } from "@lib/utils";
import { Button } from "@components/ui/Button"
import { useCart } from "@/context/CartContext";
import { CartCard } from "./CartCard"
import { EmptyCart } from "./EmptyCart";

  // TODO: add error handling if tries to join cart with no account?

  const SubtotalDisplay = ({ itemCount, subtotal }: { itemCount: number, subtotal: number }) => {
    return (
      <p className="text-lg font-medium">Subtotal ({itemCount} items): 
        <span className="font-bold"> {formatCurrency(subtotal)}</span>
      </p>
    )
  }

  export default function Page() {
    const { cartItems, isUpdating, getSubtotal } = useCart()

    const subtotal = getSubtotal()
   
    // TODO: add is loading or otherwise cartEmpty always appears for a split second
    return (
      <div className="min-h-screen w-full bg-gray-200">

        {
          !cartItems.length ? 
          ( 
            <EmptyCart></EmptyCart> 
          )
          :
          (
            <div className="flex justify-center px-10 py-10">
              <section className="w-3/5 bg-white pb-10">
                <div className="mx-10 mt-5">
                  <div className="flex flex-row justify-between items-end">
                    <header className="font-medium text-2xl mb-4">Shopping cart</header>
                    <span>Price</span>
                  </div>
                  <hr className="w-full border-t border-gray-300 mb-4"></hr>
                  <div className="flex flex-col space-y-10">
                    { cartItems.map((item, index) => (
                        <CartCard 
                          isPriority={index < 2}
                          product={item.product} 
                          quantity={item.quantity}
                          key={item.productId}>
                        </CartCard>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end items-start mt-2 mx-10">
                  <SubtotalDisplay itemCount={cartItems.length} subtotal={subtotal}></SubtotalDisplay>
                </div>
              </section>
              <div className="flex flex-col w-80 h-30 bg-white mx-5 gap-5">
                <div className="flex ml-5 mt-7">
                  <SubtotalDisplay itemCount={cartItems.length} subtotal={subtotal}></SubtotalDisplay>
                </div>
                <Link href={"/checkout"} className="w-60 mx-auto">
                  <Button variant="danger" size="sm" className={"rounded-full w-full font-bold"}>
                    <p>Proceed to checkout</p>
                  </Button>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    )
  }