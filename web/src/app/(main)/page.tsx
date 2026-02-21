import { ProductCard } from "./ProductCard";
import { ProductWithImages } from "@shared"

export default async function Page() {
  const res = await fetch("http://api:5000/products");
  const products: ProductWithImages[] = await res.json();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap w-[95%] justify-center pb-30">
        {
          products.map((product, index) => {
            return (
              <ProductCard isPriority key={index} product={product}></ProductCard>
            )
          })
        }
      </div>
    </div>
  )
}