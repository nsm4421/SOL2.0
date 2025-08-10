"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCustomMentions } from "@/hooks/use-custom-mention-state";

import { PlusCircle } from "lucide-react";
import { Editor } from "platejs";
import { ChangeEvent, useState } from "react";
import DisplayConditinosTable from "./display-conditions-table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  editor: Editor;
}

export default function ConditionPannel({ editor }: Props) {
  const { mentions, setMentions, deleteByMentionId } = useCustomMentions();
  const [label, setLabel] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleAddMention = () => {
    if (!label) {
      console.warn("label is not given");
      return;
    } else if (!text) {
      console.warn("text is not given");
      return;
    } else if (mentions.filter((e) => e.label === label).length > 0) {
      console.warn("label is duplicated");
      return;
    } else if (mentions.filter((e) => e.text === text).length > 0) {
      console.warn("condition text is duplicated");
      return;
    }

    setMentions([
      ...mentions,
      {
        id: crypto.randomUUID(),
        label,
        text,
      },
    ]);
    setLabel("");
    setText("");
  };

  const handleLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="acc-item"
    >
      <AccordionItem value="acc-item">
        <AccordionTrigger>
          <h3 className="font-semibold text-lg">

          조건식</h3>
          </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between px-2 gap-x-2">
              <Label className="font-normal text-md min-w-[60px]">Label</Label>
              <Input
                value={label}
                onChange={handleLabel}
                placeholder="조건식을 부를 이름을 작명해주세요"
              />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleAddMention}
                    variant="ghost"
                    className="cursor-pointer"
                  >
                    <PlusCircle className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span>조건식 추가</span>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="px-2 flex gap-x-2">
              <Label className="font-normal text-md min-w-[60px]">Expr</Label>
              <Input
                value={text}
                onChange={handleText}
                placeholder="조건식을 입력하세요"
              />
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto max-h-[420px]">
              <DisplayConditinosTable />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
