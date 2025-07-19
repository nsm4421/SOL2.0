import AppNavbar from "@/components/navbar";
import { DisplayProductRelationRow } from "@/types/repr-product";
import DataTable from "./_components/table";
import columns from "./_components/columns";
import flattenProductRelationData from "./_lib/flatten";
import Header from "./_components/header";
import { Download } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default async function DisplayProductRelationPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/relation/display`,
    {
      cache: "no-store",
    }
  );
  const data: DisplayProductRelationRow[] = await res
    .json()
    .then(flattenProductRelationData);

  return (
    <>
      <AppNavbar
        label={"상품관계 조회"}
        rightSideComponent={
          <Tooltip>
            <TooltipTrigger asChild>
              <Download className="cursor-pointer"/>
            </TooltipTrigger>
            <TooltipContent>
              <p>다운로드</p>
            </TooltipContent>
          </Tooltip>
        }
      />
      <main className="p-3">
        <div className="mb-5 p-2">
          <Header />
        </div>
        <DataTable columns={columns} data={data} />
      </main>
    </>
  );
}
