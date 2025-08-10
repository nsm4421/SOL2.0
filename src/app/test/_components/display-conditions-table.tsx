"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCustomMentions } from "@/hooks/use-custom-mention-state";
import { Trash } from "lucide-react";

export default function DisplayConditinosTable() {
  const { mentions, deleteByMentionId } = useCustomMentions();

  const handleDeleteMention = (id: string) => () => {
    deleteByMentionId(id);
    // TODO : 현재 에디터 내에 입력된 mention제거
  };

  return (
    <table className="w-full text-sm">
      {/* 열 너비 가이드 */}
      <colgroup>
        <col className="w-40" />
        <col />
        <col className="w-20" />
      </colgroup>

      <thead className="sticky top-0 bg-slate-50/80 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60 text-slate-600">
        <tr className="border-b border-slate-200">
          <th className="px-4 py-3 text-left font-medium tracking-wide">
            Label
          </th>
          <th className="px-4 py-3 text-left font-medium tracking-wide">
            Expression
          </th>
          <th className="px-4 py-3 text-center font-medium tracking-wide">
            비고
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-100">
        {mentions.length === 0 ? (
          <tr>
            <td colSpan={3} className="px-4 py-8 text-center text-slate-500">
              등록된 조건식이 없어요.
            </td>
          </tr>
        ) : (
          mentions.map((e, idx) => (
            <tr
              key={e.id}
              className="odd:bg-white even:bg-slate-50/40 hover:bg-slate-100 transition-colors"
            >
              <td className="px-4 py-2 align-middle">
                <span className="font-medium text-slate-900">{e.label}</span>
              </td>
              <td className="px-4 py-2 align-middle">
                <span className="font-mono text-xs text-slate-700 break-words line-clamp-2">
                  {e.text}
                </span>
              </td>
              <td className="px-2 py-2 align-middle">
                <div className="flex items-center justify-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer"
                        onClick={handleDeleteMention(e.id)}
                      >
                        <Trash className="size-4" />
                        <span className="sr-only">조건식 삭제</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>조건식 삭제</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
