import Image from "next/image";
import { formatCurrency } from "@lib/utils";
import { QuantityStepper } from "@ui/QuantityStepper";
import { ProductWithImages } from "@shared"
import { useCart } from "@/context/CartContext";
import { ActionLink } from "@navigation/ActionLink";

interface temp {
  product: ProductWithImages
  quantity: number
  isPriority: boolean
}

export function CartCard({ product, quantity, isPriority }: temp) {
  const { deleteCartItem } = useCart()

  return (
    <div>
      <div className="flex flex-row">
        <div className="relative w-1/10 h-40">
          <Image 
            alt="product photo" 
            src={`http://localhost:5000${product.productImages[0].imageUrl}`}
            fill
            className="object-contain mix-blend-multiply"
            sizes={"100%"}
            priority={isPriority}
            unoptimized
          ></Image>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col justify-between w-180">
            <div>
              <p>{product.name}</p>
            </div>
            <div className="flex items-center">
              <div className="w-30">
                <QuantityStepper quantity={quantity} productId={product.id}></QuantityStepper>
              </div>
              <div className="h-4 w-[1px] bg-gray-300 mx-2" aria-hidden="true" />
              <ActionLink onClick={() => deleteCartItem(product.id)} label="Delete"></ActionLink>
            </div>
          </div>
          <div>
            <p className="font-bold">
              {formatCurrency(product.cost.toString())}
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full border-t mt-5 border-gray-300"></hr>
    </div>
    )
}