import { columns } from "./_components/columns";
import { flattenProductData } from "./_lib/flatten";
import { DataTable } from "./_components/data-table";
import { IntegreatedProduct } from "@/models/repr-product";
import Navbar from "./_components/navbar";
import Header from "./_components/header";

export default async function Page() {
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
      <Navbar />
      <main className="p-3">
        <div className="mb-5 p-2">
          <Header />
        </div>
        <DataTable columns={columns} data={flattened} />
      </main>
    </>
  );
}
