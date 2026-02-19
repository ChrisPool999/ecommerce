export type CheckoutStep = 'shipping' | 'payment' | 'confirm' | 'success'

export type NavigableStep = Exclude<CheckoutStep, 'success'>;

export type FormData = {
  fullName: string,
  phoneNumber: string,
  streetAddress: string,
  city: string,
  state: string,
  zipcode: string,
  cardNumber: string,
  expiry: string,
  securityCode: string,
  cardholderName: string,
}

export const STEPS: CheckoutStep[] = ['shipping', 'payment', 'confirm', 'success'] as const