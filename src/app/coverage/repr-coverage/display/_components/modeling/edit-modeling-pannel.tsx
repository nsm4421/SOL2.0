"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LayoutPanelTop, PlusCircle, SaveIcon, X } from "lucide-react";
import { useState } from "react";

interface Props {
  code: string;
}

export default function EditModeingPannel({ code }: Props) {
  // TODO : 대표담보코드로 수정할 PV모델링 정보 가져오기

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setOpen(true);
      return;
    }
    const userConfirmClose = confirm("수정사항이 저장되지 않습니다");
    if (userConfirmClose) {
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer flex gap-x-3 items-center w-20 px-2"
        >
          <LayoutPanelTop />
          <label className="cursor-pointer">PV</label>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[90vw] min-w-[90vw] rounded-lg">
        <SheetHeader>
          <SheetTitle className="flex justify-start gap-x-5">
            <label className="font-semibold text-lg">PV Modeling</label>
            <div className="flex gap-x-3 items-center">
              {/* 이력추가 버튼 */}
              <Tooltip>
                <TooltipTrigger>
                  <PlusCircle className="w-5 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <span>이력추가</span>
                </TooltipContent>
              </Tooltip>
              {/* 저장하기 버튼 */}
              <Tooltip>
                <TooltipTrigger>
                  <SaveIcon className="w-5 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <span>저장하기</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </SheetTitle>
          <SheetDescription>
            현재 PV-SOL화면의 내용을 아래 화면으로 옮겨 놓자
          </SheetDescription>
        </SheetHeader>

        <div className="m-2 p-2">
          <div className="flex justify-start gap-x-3 items-center">
            <Label className=" min-w-fit">담보명</Label>
            <Input placeholder="type..." />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
