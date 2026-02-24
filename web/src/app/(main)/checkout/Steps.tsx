import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from "@/components/ui/Button";
import type { ComponentProps, InputHTMLAttributes, ReactNode } from "react";
import type { FormData } from "./types";
import { useCheckout } from "./Context";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { BUTTON_STYLES } from '@/styles/theme';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  field: keyof FormData
  className?: string
}

function FormField({children, field, className = "", ...props}: FormFieldProps) {
  const { updateField, form } = useCheckout()

  function formatPhoneNumber(number: string) {
    const val = number.slice(0, 10)
    const len = number.length

    if (len === 0) {
      return ""
    }
    if (len <= 3) {
      return `(${val}`
    }
    if (len <= 6) {
      return `(${val.slice(0, 3)}) ${val.slice(3)}`
    } 
    return `(${val.slice(0, 3)}) ${val.slice(3, 6)} - ${val.slice(6)}`
  }

  function handleFormValidation(field: keyof FormData, e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    let val = e.target.value

    if (field === "cardNumber" || field === "securityCode" || field === "expiry" || field === "phoneNumber" || field == "zipcode") {
      val = val.replace(/\D/g, '')
    }

    switch (field) {
      case "cardNumber":
        val = val.slice(0, 16)
        val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
        break

      case "securityCode":
        val = val.slice(0, 3)
        break

      case "expiry":
        val = val.slice(0, 4)
        val = val.replace(/(\d{2})(?=\d)/, '$1 / ');
        break

      case "zipcode":
        val = val.slice(0, 5)
        break

      case "phoneNumber":
        val = formatPhoneNumber(val)
    }

    updateField(field, val)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm mb-1 relative font-light">{children}
        { props.required && 
            <span className="absolute bot-1 font-medium text-xs">*</span> 
        }
      </label>
      <input 
        onChange={(e) => handleFormValidation(field, e)}
        className="border border-gray-300 h-10 shadow-sm px-3"
        value={form[field]}
        {...props}
      />
    </div>
  )
}

interface FormBaseProps {
  children: ReactNode,
  header: string,
}

function FormBase({children, header}: FormBaseProps) {
  const { completeCurrStep } = useCheckout()

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    completeCurrStep()
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mt-5">{header}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-7 gap-10">
        {children}
        <Button 
          as={"button"}
          type="submit"
          variant='sleek'
          className="shadow-lg"
          >
            Submit
        </Button>
      </form>
    </div>
  )
}

export function AddressForm() {

  return (
    <FormBase header="Shipping Address">
      <div className="flex justify-between">
        <FormField required field="fullName" className="w-4/7">Full Name</FormField>
        <FormField type="tel" field="phoneNumber">Phone Number (for delivery)</FormField>
      </div>
      <FormField required field="streetAddress">Street Address</FormField>
      <div className="flex justify-between gap-5">
        <FormField required field="city">City</FormField>
        <FormField required field="state">State</FormField>
        <FormField required field="zipcode">Zipcode</FormField>
      </div>
    </FormBase>
  )
}

export function PaymentForm() {
  return (
    <FormBase header="Payment Info">
      <FormField required placeholder="0000 0000 0000 0000" field="cardNumber">Card Number</FormField>
      <div className="w-full grid grid-cols-12">
        <FormField required placeholder="MM / YY" field="expiry" className="col-span-7">Expiry</FormField>
        <FormField required placeholder="CVC" type="password" field="securityCode" className="col-span-5 ml-auto">Security Code</FormField>
      </div>
      <FormField required placeholder="Cardholder Name" field="cardholderName">Cardholder Name</FormField>
    </FormBase>
  )
}

export function OrderSummary() {
  const { setStep, stepsDone, form, canPlaceOrder, createOrder, orderError } = useCheckout()

  const orderButtonStyle: keyof typeof BUTTON_STYLES = canPlaceOrder ? 'sleek' : 'inactive'

  return (
    <div>
      <h1 className='font-bold text-2xl my-5'>Confirm Order</h1>
        <div>
          <h2 className='flex gap-5 text-lg font-medium mb-5'>
            <span>Shipping Details</span>
          </h2>
          { stepsDone['shipping'] ?
            <div>
              <h3 className='font-medium mt-2'>Shipping to</h3>
              <div className='flex flex-col text-sm'>
                <span>{form.fullName}</span>
                <span>{form.streetAddress}</span>
                <div className='flex'>
                  <span>{form.city + ", " + form.state + ", " + form.zipcode}</span>
                </div>
                <span>{form.phoneNumber}</span>
              </div>
            </div> :
            <div className='w-1/3'>
              <Button onClick={() => setStep('shipping')} variant='royal'>Add shipping information</Button>
            </div>
          }
        
        </div>
        <hr className='border border-gray-200 my-10'></hr>
        <div>
          <h2 className='flex gap-5 text-lg font-medium mb-5'>
            <span>Payment Details</span>
          </h2>
             
          { stepsDone['payment'] ? 
          <div>
            <h3 className='font-medium mt-2'>Paying with</h3>
            <div className='flex flex-col text-sm'>
              <span>Card ending in {form.cardNumber.slice(form.cardNumber.length - 4)}</span>
              <span>{form.expiry}</span>
              <span>{form.cardholderName}</span>      
            </div>
          </div> :
            <div className='w-1/3'>
              <Button onClick={() => setStep('payment')} variant='royal'>Add payment information</Button>
            </div>
          }
        </div>
        <hr className='border border-gray-200 my-10'></hr>
        <div className='w-full flex'>
          <Button variant={orderButtonStyle} disabled={!canPlaceOrder} onClick={createOrder} className='w-full mx-auto'>Place order</Button>
        </div>

        { orderError && (
          <div className='relative'>
            <span className='text-red-400 font-medium absolute top-2'>There was a problem creating your order</span>
          </div>
        )}

    </div>
  )
}