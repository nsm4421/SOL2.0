import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { ChevronDown, Layers, MinusCircle, PlusCircle } from "lucide-react";

export default function Condition() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-5 items-center">
          <h2 className="font-bold">조건식</h2>
          <PlusCircle className="size-4" />
        </div>

        <div className="flex items-center gap-x-4">
          <Tooltip>
            <TooltipTrigger>
              <Layers className="size-4 cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>약관 미리보기</p>
            </TooltipContent>
          </Tooltip>

          <ChevronDown className="size-4" />
        </div>
      </div>

      <ul className="flex flex-col gap-y-3">
        <li className="flex gap-x-3 items-center">
          <MinusCircle className="size-4 cursor-pointer" />
          <Card className="p-3">
            <div className="flex gap-x-5 flex-row-reverse items-center">
              <Switch />
              <Label>갱신형여부</Label>
            </div>
          </Card>
        </li>

        <li className="flex gap-x-3 items-center">
          <MinusCircle className="size-4 cursor-pointer" />
          <Card className="p-3">
            <div className="flex gap-x-5 flex-row-reverse items-center">
              <Switch />
              <Label>적립담보여부</Label>
            </div>
          </Card>
        </li>

        <li className="flex gap-x-3 items-center">
          <MinusCircle className="size-4 cursor-pointer" />
          <Card className="p-3">
            <div className="flex gap-x-5">
              <Label>담보유형</Label>
              <Separator orientation="vertical" />

              <RadioGroup defaultValue="상해" className="flex">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="상해" />
                  <Label className="text-sm">상해</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="질병" />
                  <Label className="text-sm">질병</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="상해및질병" />
                  <Label className="text-sm">상해및질병</Label>
                </div>
              </RadioGroup>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  );
}
