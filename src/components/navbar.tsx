import { MenuIcon } from "lucide-react";
import { ReactNode } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

interface Props {
  label: string;
  rightSideComponent?: ReactNode;
}

export default function AppNavbar({ label, rightSideComponent }: Props) {
  return (
    <nav className="p-2 bg-slate-600 flex justify-between text-white">
      <div className="px-2 flex items-center gap-x-3">
        <i className="cursor-pointer">
          <LeftDrawer />
        </i>
        <h1 className="text-xl font-bold">{label}</h1>
      </div>
      <div>{rightSideComponent && rightSideComponent}</div>
    </nav>
  );
}

function LeftDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <MenuIcon className="size-4" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>SOL2.0</DrawerTitle>
          <DrawerDescription>Navigation</DrawerDescription>
        </DrawerHeader>

        {/* 상품 섹션 */}
        <div className="flex flex-col ml-3">
          <div>
            <h3 className="text-md font-semibold text-muted-foreground mb-2">
              상품
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/product/repr-product/display"
                  className="text-sm hover:underline"
                >
                  상품 목록
                </Link>
              </li>
            </ul>
          </div>

          <Separator className="my-4" />

          {/* 담보 섹션 */}
          <div>
            <h3 className="text-md font-semibold text-muted-foreground mb-2">
              담보
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/coverage/repr-coverage/display"
                  className="text-sm hover:underline"
                >
                  대표담보 조회
                </Link>
              </li>
              <li>
                <Link
                  href="/coverage/repr-coverage/create"
                  className="text-sm hover:underline"
                >
                  대표담보 생성
                </Link>
              </li>
              <li>
                <Link
                  href="/coverage/repr-coverage/term/edit"
                  className="text-sm hover:underline"
                >
                  대표담보 약관작성
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
