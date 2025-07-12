import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { IntegreatedProduct } from "@/models/repr-product";
import Header from "./_components/header";
import AppNavbar from "@/components/navbar";
import flattenProductData from "./_lib/flatten";

export default async function DisplayReprProductPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/repr-product/display`,
    {
      cache: "no-store",
    }
  );
  const data: IntegreatedProduct[] = await res.json();
  const flattened = flattenProductData(data);

  return (
    <>
     <AppNavbar label={"상품조회"} />
      <main className="p-3">
        <div className="mb-5 p-2">
          <Header />
        </div>
        <DataTable columns={columns} data={flattened} />
      </main>
    </>
  );
}
