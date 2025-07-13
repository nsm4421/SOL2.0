import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Menu, SquarePlus, User } from "lucide-react";
import Link from "next/link";

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
        <h1 className="text-xl font-bold">대표담보 조회</h1>
      </div>
      <div className="flex items-center gap-x-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/repr-coverage/create"}>
              <i className="cursor-pointer">
                <SquarePlus />
              </i>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{"대표담보 생성"}</p>
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
