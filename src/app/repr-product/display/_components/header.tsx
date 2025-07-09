import { Input } from "@/components/ui/input";
import { Calendar1Icon, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center max-w-1/2 gap-x-3">
        <i className="text-slate-500">
          <Search />
        </i>
        <Input
          className="w-full min-w-lg"
          type="text"
          placeholder="검색"
        />
      </div>

      <div className="flex items-center max-w-lg gap-x-3">
        <i className="text-slate-500">
          <Calendar1Icon />
        </i>
        <Input
          type="text"
          placeholder="기준일자(YYYY-MM-DD)"
          defaultValue={"2025-07-07"}
          maxLength={10}
          inputMode="numeric"
          pattern="\d{4}-\d{2}-\d{2}"
        />
      </div>
    </div>
  );
}
