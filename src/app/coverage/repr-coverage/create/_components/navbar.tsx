import AppNavbar from "@/components/navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Save, User } from "lucide-react";

export default function Navbar() {
  return (
    <AppNavbar
      label={"대표담보 생성"}
      rightSideComponent={
        <div className="flex items-center gap-x-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <i className="cursor-pointer">
                <Save />
              </i>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"저장"}</p>
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
