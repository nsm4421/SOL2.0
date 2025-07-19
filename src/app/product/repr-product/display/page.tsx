import Header from "./_components/header";
import AppNavbar from "@/components/navbar";
import flattenProductData from "./_lib/flatten";
import { DisplayProductRow } from "@/types/repr-product";
import { Table } from "./_components/table";

export default async function DisplayReprProductPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/repr-product/display`,
    {
      cache: "no-store",
    }
  );
  const data: DisplayProductRow[] = await res.json().then(flattenProductData);

  return (
    <>
      <AppNavbar label={"상품조회"} />
      <main className="p-3">
        <div className="mb-5 p-2">
          <Header />
        </div>
        <Table data={data} />
      </main>
    </>
  );
}
