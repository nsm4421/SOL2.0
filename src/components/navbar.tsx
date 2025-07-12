import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu, User } from "lucide-react";

interface Props {
  label: string;
}

export default function AppNavbar({ label }: Props) {
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
        <h1 className="text-xl font-bold">{label}</h1>
      </div>
      <div>
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
