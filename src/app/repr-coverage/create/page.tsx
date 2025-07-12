import Navbar from "./_components/nav";
import { PlusCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SelectCategory from "./_components/select-category";
import CovName from "./_components/cov-name";
import DetailedCoverages from "./_components/detailed-coverages";

export default function CoverageFormPage() {
  return (
    <>
      <Navbar />

      <main className="p-4 mt-4 flex flex-col gap-y-5">
        {/* 담보분류 */}
        <section className="flex flex-col gap-y-6 w-full">
          <div className="flex gap-x-5 items-center">
            <label className="block mb-1 text-sm font-medium mr-3 min-w-fit">
              담보분류
            </label>
            <SelectCategory />
          </div>

          <div className="flex gap-x-5 items-center w-full">
            <label className="block mb-1 text-sm font-medium mr-1 min-w-fit">
              대표담보명
            </label>
            <CovName />
          </div>
        </section>

        {/* 담보 모델링 */}
        <section className="flex flex-col gap-y-4">
          <div className="flex justify-start gap-x-5 items-center">
            <label className="block mb-1 text-sm font-medium">
              담보 모델링
            </label>
            <Tooltip>
              <TooltipTrigger asChild>
                <i className="cursor-pointer">
                  <PlusCircle className="size-5" />
                </i>
              </TooltipTrigger>
              <TooltipContent>
                <p>{"세부보장 추가"}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <DetailedCoverages />
        </section>
      </main>
    </>
  );
}
