import { ProductCard } from "./ProductCard";
import { ProductWithImages } from "@shared"

export default async function Page() {
  const res = await fetch("http://api:5000/products");
  const products: ProductWithImages[] = await res.json();

  return (
    <div className="flex">
      <ProductCard isPriority product={products[0]}></ProductCard>
      <ProductCard isPriority product={products[1]}></ProductCard>
      <ProductCard isPriority product={products[2]}></ProductCard>
      <ProductCard isPriority product={products[3]}></ProductCard>
      <ProductCard isPriority product={products[4]}></ProductCard>
    </div>
  )
}