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
    const { cartItems, getSubtotal, isLoading } = useCart()

    const subtotal = getSubtotal() 
    const tax = subtotal * .08      

    // TODO: add is loading or otherwise cartEmpty always appears for a split second
    return (
      <div className="min-h-screen w-full bg-white">
      <div className="h-10 w-full bg-gradient-to-b from-stone-300 to-white"></div>

        {
          !cartItems.length ? 
          ( 
            isLoading ? <></> : <EmptyCart></EmptyCart> 
          )
          :
          (
            <div className="flex w-full gap-5">
              <div className="flex justify-end w-6/10">
                <section className="flex flex-col w-[60%] max-w-150 mx-15">
                  <h2 className="font-black text-lg pt-5">CART ({cartItems.length} ITEMS)</h2>
                  <hr className="w-full border-t mt-5 border-gray-300"></hr>
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
                </section>
              </div>
              <div className="mb-10">
                <hr className="border-r border-gray-300 h-full"></hr>
              </div>
              <section className="flex-1">
                <div className="sticky top-0 flex flex-col w-full max-w-100 max-h-600 mx-15">
                  <h2 className="font-black text-lg pt-5">ORDER SUMMARY</h2>
                  <hr className="w-full border-t mt-5 border-gray-300"></hr>
                  <div className="grid grid-cols-[1fr_auto] py-3 gap-6 text-[#5e6164]">
                    <span>Subtotal: </span>
                    <span>{formatCurrency(subtotal)}</span>
                    <span>Shipping & handling:</span>
                    <span>FREE</span>
                    <span className="font-semibold text-black">Estimated total:</span>
                    <span className="font-semibold text-black">{formatCurrency(subtotal)}</span>
                  </div>
                  <hr className="w-full border-t my-5 border-gray-300"></hr>
                  <div className="flex flex-col gap-4">
                    <Link href={"/checkout"}>
                      <Button variant="bold" size="xl">CHECKOUT</Button>
                    </Link>
                    <Link href={"/"}>
                      <Button variant="light" size="xl">CONTINUE SHOPPING</Button>
                    </Link>
                  </div>
                </div>
              </section>              
            </div>
          )
        }
      </div>
    )
  }