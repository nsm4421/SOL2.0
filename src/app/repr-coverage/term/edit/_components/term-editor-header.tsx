import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MoveHorizontal } from "lucide-react";

export default function TermEditorHeader() {
  return (
    <div className="flex justify-between">
     <h2 className="font-bold">Editor</h2>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="cursor-pointer" variant="ghost">
            <MoveHorizontal />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>펼치기</span>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
