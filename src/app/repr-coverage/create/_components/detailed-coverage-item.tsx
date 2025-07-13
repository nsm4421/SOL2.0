"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCreateReprCov } from "@/hooks/use-create-repr-cov";
import { MinusCircle, PlusCircle, SquarePen, X } from "lucide-react";

interface Props {
  detCovIndex: number;
}

export default function DetailedCoverageItem({ detCovIndex }: Props) {
  const { repr, addBenefit, remveBenefit, getDetCov } = useCreateReprCov();

  const handleAddBenefit = () => {
    addBenefit(detCovIndex, {});
  };

  const handleRemoveBenefit = (benefitIndex: number) => () => {
    remveBenefit(detCovIndex, benefitIndex);
  };

  return (
    <div className="space-y-4 rounded-md border border-border p-4">
      {/* 보장 그룹 */}
      <div className="space-y-4">
        <div className="flex items-center justify-start gap-x-5">
          <span className="font-semibold">보장</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="cursor-pointer"
                variant="ghost"
                onClick={handleAddBenefit}
              >
                <PlusCircle className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"급부 추가하기"}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {repr.children.length > 1 && (
          <div className="my-3 flex gap-x-3 w-full items-center">
            <label className="text-sm min-w-fit">세부보장명</label>
            <div className="w-full">
              <Input placeholder="세부보장명을 입력해주세요" />
            </div>
          </div>
        )}

        {/* 급부 그룹 */}
        <ul className="flex flex-col gap-y-3">
          {getDetCov(detCovIndex).benefits.map((_, benefitIndex) => (
            <li key={benefitIndex} className="flex w-full">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="cursor-pointer"
                    variant="ghost"
                    onClick={handleRemoveBenefit(benefitIndex)}
                  >
                    <MinusCircle className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>급부 삭제하기</p>
                </TooltipContent>
              </Tooltip>

              <div className="space-y-2 rounded-md border border-border p-4 w-full">
                <div className="flex items-center gap-x-3">
                  <span className="font-medium">급부</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="cursor-pointer" variant="ghost">
                        <SquarePen className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuLabel><span className="text-slate-500">급부특성</span></DropdownMenuLabel>
                      <DropdownMenuItem>
                        <label>급부유형</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <label>감액특성</label>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <label>면책특성</label>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* 급부위험률코드 입력 */}
                <div className="relative">
                  <Input placeholder="급부위험률코드를 입력해주세요" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
