import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BenefitUnit } from "@/models/repr-coverage";
import { Plus, X } from "lucide-react";

interface Props {
  benefitUnit: BenefitUnit;
}

export default function BenefitUnitItem({ benefitUnit }: Props) {
  return (
    <div className="space-y-2 rounded-md border border-border">
      <span className="font-medium">급부</span>

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
  );
}
