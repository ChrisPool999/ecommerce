import { ProductCard } from "./ProductCard";
import { ProductWithImages } from "@shared"
import { API_URL } from "@lib/constants";

export default async function Page() {
  const res = await fetch(`${API_URL}/products`);
  const products: ProductWithImages[] = await res.json();

  return (
    <div className="flex flex-col bg-neutral-50 pb-30 pt-10">
        <div className="flex flex-wrap justify-center mx-10 gap-y-15 gap-x-8 w-fit">
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