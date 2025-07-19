import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import Header from "./_components/header";
import { ReprCoverage } from "@/models/repr-coverage";
import ReprCovRow from "./_lib/repr-cov-row";
import Navbar from "./_components/navbar";

export default async function DisplayReprCovefagePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/coverage/repr-coverage/display`,
    {
      cache: "no-store",
    }
  );
  const mockData: ReprCovRow[] = await res.json().then((res: ReprCoverage[]) =>
    res.map((e) => ({
      cateory: e.category ?? "상해",
      reprCovCode: e.code ?? "",
      reprCovName: e.name,
      refernceDate: "2025-07-07",
    }))
  );

  return (
    <>
      <Navbar />
      <main className="p-3">
        <div className="mb-5 p-2">
          <Header />
        </div>
        <DataTable columns={columns} data={mockData} />
      </main>
    </>
  );
}
