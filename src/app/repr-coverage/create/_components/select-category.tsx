"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCreateReprCov } from "@/hooks/use-create-repr-cov";
import { CoverageCategory } from "@/models/repr-coverage";

export default function SelectCategory() {
  const { setCategory } = useCreateReprCov();

  const handleCategory = (v: string) => () => {
    setCategory(v as CoverageCategory);
  };

  return (
    <div className="rounded-xl border-1 px-2 py-3 w-full">
      <RadioGroup defaultValue="상해" className="flex gap-6">
        {["상해", "질병", "상해및질병", "비용"].map((v) => (
          <div
            key={v}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleCategory(v)}
          >
            <RadioGroupItem value={v} id={v} className="cursor-pointer" />
            <label htmlFor={v} className="text-sm">
              {v}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
