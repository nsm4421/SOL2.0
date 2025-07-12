"use client";

import { useCreateReprCov } from "@/hooks/use-create-repr-cov";
import DetailedCoverageItem from "./detailed-coverage-item";
import { MinusCircle, Plus, PlusCircle, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function DetailedCoverages() {
  const { repr, addDetail, removeDetail } = useCreateReprCov();

  const handleAddDetailedCoverage = () => {
    addDetail({
      category: repr.category,
      benefits: [{}],
    });
  };

  const handleRemoteDetailedCoverage = (detCovIndex: number) => () => {
    removeDetail(detCovIndex);
  };

  return (
    <>
      <div className="flex justify-start gap-x-5 items-center">
        <label className="block mb-1 text-sm font-medium">담보 모델링</label>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={handleAddDetailedCoverage}
            >
              <PlusCircle className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{"세부보장 추가"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <ul className="flex flex-col gap-y-3">
        {repr.children &&
          repr.children.map((_, detCovIndex) => (
            <li key={detCovIndex} className="flex w-full">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="cursor-pointer"
                    variant="ghost"
                    onClick={handleRemoteDetailedCoverage(detCovIndex)}
                  >
                    <MinusCircle className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>세부보장 삭제하기</p>
                </TooltipContent>
              </Tooltip>
              <div className="w-full">
                <DetailedCoverageItem detCovIndex={detCovIndex} />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
