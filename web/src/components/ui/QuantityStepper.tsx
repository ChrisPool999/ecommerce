import { Button } from "./Button"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useCart } from "@/context/CartContext";
import { BUTTON_STYLES } from "@/styles/theme";

type textSize = "heavy" | "light"

interface StepperProps {
  productId: number,
  quantity: number,
  variant: keyof typeof BUTTON_STYLES
  textSize: textSize
}

// TODO: make this more extendable
export function QuantityStepper({productId, quantity, variant, textSize}: StepperProps) {
  const { updateCart } = useCart()

  return (
    <Button as="div" size="md" variant={variant}>
      <div className="flex flex-row justify-between items-center">
        <button className="cursor-pointer" onClick={() => updateCart(productId, -1)}>
          <RemoveIcon className={textSize === "heavy" ? "!h-6 !w-6" : "!h-4 !w-4"}/>
        </button>
        <div>
          <span className={textSize === "heavy" ? "text-md" : "text-xs"}>
            {quantity}
          </span>
        </div>
        <button className="cursor-pointer" onClick={ () => updateCart(productId, 1)}>
          <AddIcon className={textSize === "heavy" ? "!h-6 !w-6" : "!h-4 !w-4"}/>
        </button>
      </div>
    </Button>
  )
}