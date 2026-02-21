import { type FormData, CheckoutStep, STEPS, type NavigableStep } from "./types"
import { useState, createContext, useContext, ReactNode, useMemo } from "react"
import { useCart } from "@/context/CartContext"
import { API_URL } from "@lib/constants"


interface CheckoutContextValue {
  step: CheckoutStep,
  stepsDone: Record<Exclude<CheckoutStep, 'success'>, boolean>
  form: FormData
 
  setStep: React.Dispatch<React.SetStateAction<CheckoutStep>>
  setStepsDone: React.Dispatch<React.SetStateAction<Record<Exclude<CheckoutStep, 'success'>, boolean>>>
  setForm: React.Dispatch<React.SetStateAction<FormData>>
  updateField: (field: keyof FormData, value: string) => void

  completeCurrStep: () => void
  canPlaceOrder: boolean
  createOrder: () => void
  orderId: string | null
  orderError: boolean
}

const CheckoutContext = createContext<CheckoutContextValue | undefined>(undefined)

export function CheckoutProvider( {children}: {children: ReactNode} ) {
  const [step, setStep] = useState<CheckoutStep>('shipping')
  
  const [stepsDone, setStepsDone] = useState<Record<NavigableStep, boolean>>({
    shipping: false,
    payment: false,
    confirm: false,
  })

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    cardNumber: "",
    expiry: "",
    securityCode: "",
    cardholderName: ""
  })

  const [orderId, setOrderId] = useState<string | null>(null)
  const [orderError, setOrderErorr] = useState<boolean>(false)

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm({
      ...form,
      [field]: value
  })}

  const { clearCartLocal } = useCart()

  const completeCurrStep = () => {
    const stepIndex = STEPS.indexOf(step)

    if (stepIndex >= STEPS.length) {
      // set UI error
      console.error("Out of bounds error:")
      return
    }

    setStepsDone((prev) => ({
      ...prev,
      [step]: true

    }))

    setStep(STEPS[stepIndex + 1])
  }  

  const canPlaceOrder = useMemo(() => {
    return STEPS
      .filter(step => step !== 'confirm' && step !== 'success')
      .every(step => stepsDone[step] === true)
  }, [stepsDone])

  const createOrder = async () => {
    const res = await fetch(`${API_URL}/checkout/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        form
      })
    })

    if (res.ok) {
      clearCartLocal()      
      completeCurrStep()

      const data = await res.json()
      setOrderId(data.orderId)
      setOrderErorr(false)
    } else {
      setOrderErorr(true)
    }

  }

  return ( 
    <CheckoutContext.Provider 
      value=
      { 
        {step, stepsDone, form, setStep, setStepsDone, setForm, updateField, completeCurrStep, canPlaceOrder, createOrder, orderId, orderError} 
      }>

      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider")
  }
  return context
}