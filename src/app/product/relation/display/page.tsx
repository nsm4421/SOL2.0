import AppNavbar from "@/components/navbar";
import { FetchProductsResponse } from "@/types/repr-product";

export default async function DisplayProductRelationPage() {

 const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/repr-product/display`,
    {
      cache: "no-store",
    }
  );
  const data: FetchProductsResponse = await res.json();

  return (
    <>
      <AppNavbar label={"상품관계 조회"} />
        <main className="h-full">

        </main>

    </>
  );
}
