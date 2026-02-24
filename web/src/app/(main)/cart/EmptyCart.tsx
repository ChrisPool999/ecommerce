import Image from "next/image"
import Link from "next/link"
import { Button } from "@ui/Button"

export function EmptyCart() {
  return (
    <div className="flex items-center align-center flex-col bg-transparent pt-10">
      <Image
        src={"/icons/cart.png"}
        alt="shopping cart"
        width={100}
        height={100}
        priority
      ></Image>
      <section className="flex flex-col items-center mt-10 gap-4 bg-white w-full py-5">
        <header className="font-bold text-4xl">Your cart is empty!</header>
        <p className="text-md">Must add items onto the cart before checkout</p>
        <Link href={"/"}>
          <Button variant="sleek" size="lg" className="w-60 font-semibold">View products</Button>
        </Link>
      </section>
    </div>
  )
}