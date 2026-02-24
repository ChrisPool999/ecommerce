'use client'

import { formatCurrency } from "@lib/utils";
import { Stepper } from "./Stepper";
import { AddressForm, PaymentForm, OrderSummary} from "./Steps"
import { CheckoutProvider, useCheckout } from "./Context";
import { useCart } from "@/context/CartContext";
import { OrderConfirmation } from "./OrderConfirmation";

function CheckoutContent() {
  const { step } = useCheckout()
  const { cartItems, getSubtotal } = useCart()

  if (step === 'success') {
    return <OrderConfirmation/>
  }

  const subtotal = getSubtotal()
  const tax = subtotal * .08  

  return (
    <div className="flex w-full">
      <div className="flex items-start mx-auto w-2/3 pt-4 gap-2 min-w-200 max-w-300">
        <div className="w-[70%] flex flex-col gap-4 bg-white px-10 py-10">
          <Stepper></Stepper>

          {step === 'shipping' && <AddressForm></AddressForm>}
          {step === 'payment' && <PaymentForm></PaymentForm> }
          {step === 'confirm' && <OrderSummary></OrderSummary> }

        </div>
        <hr className="border-r border-gray-200 h-full"></hr>
        <div className="w-[30%] flex flex-col bg-white">
          <div className="grid grid-cols-[1fr_auto] py-3 mx-7 gap-3">
            <span>Items: ({cartItems.length})</span>
            <span>{formatCurrency(subtotal)}</span>
            <span>Shipping & handling:</span>
            <span>$6.50</span>
            <span>Estimated tax to be collected:</span>
            <span>{formatCurrency(tax)}</span>
            <span className="font-bold text-lg mt-2">Order total:</span>
            <span className="font-bold text-lg mt-2">{formatCurrency(subtotal + 6.50 + tax)}</span>
          </div>
        </div>
      </div>
    </div> 
  )  
}


export default function Page() {
  return (
    <CheckoutProvider>
      <CheckoutContent/>
    </CheckoutProvider>
  )
}