"use client";

import { Input } from "@/components/ui/input";
import { useCreateReprCov } from "@/hooks/use-create-repr-cov";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ChangeEvent } from "react";

interface Props {
  initValue?: string;
}

export default function CovName({ initValue }: Props) {
  const { setName } = useCreateReprCov();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => () => {
    setName(e.target.value);
  };

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="대표담보명"
        defaultValue={initValue}
        onChange={handleChange}
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
}
