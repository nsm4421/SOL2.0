import MarkdownModal from "@/components/markdown-modal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle, Menu, SaveIcon, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="p-2 bg-slate-600 flex justify-between text-white">
      <div className="px-2 flex items-center gap-x-3">
        <i className="cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <i className="cursor-pointer">
                <Menu />
              </i>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"사이드바 열기"}</p>
            </TooltipContent>
          </Tooltip>
        </i>
        <h1 className="text-xl font-bold">대표담보 생성</h1>
        <div className="cursor-pointer">
          <MarkdownModal
            trigger={<HelpCircle />}
            title="대표담보 생성 페이지"
            markdownPath="/docs/create-repr-coverage.md"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <i className="cursor-pointer">
              <SaveIcon />
            </i>
          </TooltipTrigger>
          <TooltipContent>
            <p>{"저장하기"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <i className="cursor-pointer">
              <User />
            </i>
          </TooltipTrigger>
          <TooltipContent>
            <p>{"Karma (122200604)"}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}
