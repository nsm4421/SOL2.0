import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DetailedCoverage } from "@/models/repr-coverage";
import { Plus, PlusCircle, X } from "lucide-react";

interface Props {
  idx : number;
  detCov: DetailedCoverage;
}

export default function DetailedCoverageItem({idx, detCov}:Props) {



  return (
    <div className="space-y-4 rounded-md border border-border p-4">
      {/* 보장 그룹 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold">보장</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <i className="cursor-pointer">
                <PlusCircle className="size-5" />
              </i>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"급부 추가"}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* 급부 그룹 */}


        <div className="space-y-2 rounded-md border border-border p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">급부</span>
            <Button variant="ghost" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* 특성들 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">특성들</span>
              <Button variant="ghost" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
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
        </div>
      </div>
    </div>
  );
}
