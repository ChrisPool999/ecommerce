import { Button } from "./Button"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useCart } from "@/context/CartContext";

interface StepperProps {
  productId: number,
  quantity: number,
}

export function QuantityStepper({productId, quantity}: StepperProps) {
  const { updateCart } = useCart()

  return (
    <Button as="div" variant="transparent" size="sm" className={"border border-yellow-500"}>
      <div className="flex flex-row justify-between">
        <button className="cursor-pointer" onClick={() => updateCart(productId, -1)}>
          <RemoveIcon></RemoveIcon>
        </button>
        <div>
          <span>{quantity}</span>
        </div>
        <button className="cursor-pointer" onClick={ () => updateCart(productId, 1)}>
          <AddIcon></AddIcon>
        </button>
      </div>
    </Button>
  )
}