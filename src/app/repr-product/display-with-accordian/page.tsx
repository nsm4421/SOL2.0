import { FetchProductsResponse } from "@/types/repr-product";
import ProductsTable from "./_components/table";

export default async function DisplayReprProductPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/repr-product/display`,
    {
      cache: "no-store",
    }
  );
  const data: FetchProductsResponse = await res.json();

  return (
    <>
      <nav>대표상품 조회안 2안</nav>

      <main className="p-3">
        <ProductsTable data={data}/>
      </main>
    </>
  );
}
