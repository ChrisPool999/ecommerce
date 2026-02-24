import Image from "next/image";
import { formatCurrency } from "@lib/utils";
import { QuantityStepper } from "@ui/QuantityStepper";
import { ProductWithImages } from "@shared"
import { useCart } from "@/context/CartContext";
import { ActionLink } from "@navigation/ActionLink";
import { API_URL } from "@lib/constants";

interface temp {
  product: ProductWithImages
  quantity: number
  isPriority: boolean
}

export function CartCard({ product, quantity, isPriority }: temp) {
  const { deleteCartItem } = useCart()

  return (
    <div className="">
      <div className="flex justify-between py-10">
        <div className="relative w-1/5 h-35">
          <Image 
            alt="product photo" 
            src={`${API_URL}${product.productImages[0].imageUrl}`}
            fill
            className="object-contain mix-blend-multiply bg-gray-50"
            sizes={"100%"}
            priority={isPriority}
            unoptimized
          ></Image>
        </div>
        <div className="flex flex-col justify-between w-1/3">
          <p className="line-clamp-2 text-[#202020] text-sm">{product.name}</p>
          <p className="text-[#222222] text-sm">
            {formatCurrency(product.cost.toString())}
          </p>
        </div>
        <div className="flex flex-col items-end justify-between  w-1/3">
          <ActionLink onClick={() => deleteCartItem(product.id)} label="Remove"></ActionLink>
          <div className="w-30">
            <QuantityStepper variant="transparentLight" textSize="light" quantity={quantity} productId={product.id}></QuantityStepper>
          </div>
        </div>
      </div>
      <hr className="w-full border-t mt-5 border-gray-300"></hr>
    </div>
    )
}