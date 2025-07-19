import AppNavbar from "@/components/navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlusCircle, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppNavbar
      label={"대표담보 조회"}
      rightSideComponent={
        <div className="flex items-center gap-x-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"/repr-coverage/create"}>
                <i className="cursor-pointer">
                  <PlusCircle />
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
      }
    />
  );
}
