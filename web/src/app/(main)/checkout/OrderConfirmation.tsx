import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCheckout } from "./Context"

export function OrderConfirmation() {
  const router = useRouter()
  const { orderId } = useCheckout()

  return (
    <div className="flex flex-col w-fit items-center mx-auto justify-center mt-5 p-8">
      <Image
        src="/icons/success.svg"
        alt="order successful"
        width={250}
        height={250}
      >
      </Image>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-3xl">Your order has been placed!</h1>
        <div className="flex flex-col items-center text-gray-700">
          <span>Confirmation details has been sent to your email</span>
          <span> Order ID: {orderId}</span>
        </div>
        <Button onClick={() => router.push("/")} variant="sleek" className="w-full">Go back home</Button>
      </div>
    </div>
  )
} 