import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MinusCircle,
  MoveDownIcon,
  MoveUpIcon,
  PlusCircle,
} from "lucide-react";

export default function TermStruct() {
  return (
    <>
      <div className="flex gap-x-5 items-center">
        <h2 className="font-bold">Struct</h2>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="cursor-pointer">
              <PlusCircle />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>조 추가하기</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Card className="p-2">
        <ol className="flex flex-col gap-y-2 list-none">
          {[
            "보험금 지급에 관한 세부규정",
            "충수염의 정의 및 진단확정",
            "수술의 정의와 장소",
            "특별약관의 소멸",
            "준용규정",
          ].map((jo, idx) => (
            <li
              key={idx}
              className="hover:bg-slate-200 rounded-lg cursor-pointer py-2 px-1 flex justify-between items-center"
            >
              <span>
                [{idx + 1}] {jo}
              </span>
              <div className="flex gap-x-3 items-center">
                <MoveUpIcon className="size-4 text-slate-500" />
                <MoveDownIcon className="size-4 text-slate-500" />
                <MinusCircle className="size-4 text-slate-500" />
              </div>
            </li>
          ))}
        </ol>
      </Card>
    </>
  );
}
``;
