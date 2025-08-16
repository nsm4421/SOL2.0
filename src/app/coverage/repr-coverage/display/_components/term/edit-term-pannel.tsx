"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Book, PlusCircle, SaveIcon, X } from "lucide-react";
import { useState } from "react";
import TermToc from "./toc";
import TermEditor from "./editor/term-editor";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props {
  code: string;
}

export default function EditTermPannel({ code }: Props) {
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
          <Book />
          <label className="cursor-pointer">약관</label>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[90vw] min-w-[90vw] rounded-lg">
        <SheetHeader>
          <SheetTitle className="flex justify-start gap-x-5">
            <label className="font-semibold text-lg">약관 Modeling</label>
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
          <SheetDescription>대표담보 약관을 모델링</SheetDescription>
        </SheetHeader>

        <div className="m-2 p-2 flex gap-x-3 grid-cols-2 max-h-[80vh]">
          {/* 목차 */}
          <section className="w-full max-w-[30vw] flex flex-col h-full">
            <h4 className="font-semibold">목차</h4>
            <TermToc />
          </section>

          {/* 약관 에디터 */}
          <section className="w-full min-h-0 flex flex-col">
            <h4 className="font-semibold">Editor</h4>
            <TermEditor />
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
}
