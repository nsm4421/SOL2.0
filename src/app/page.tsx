import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center h-full">
      <div className="mx-auto my-auto">
        <main>
          <h1 className="mb-5 font-bold text-xl">SOL2.0 디지안 시안</h1>
          <ul className="flex flex-col gap-y-1">
            <li>
              <Link href={"/repr-product/display"}>
                <Button className="flex justify-between items-center p-2 cursor-pointer hover:text-sky-600 gap-x-3">
                  <label>상품 조회 페이지</label>
                  <MoveRight />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/repr-product/display-with-accordian"}>
                <Button className="flex justify-between items-center p-2 cursor-pointer hover:text-sky-600 gap-x-3">
                  <label>상품 조회 페이지2</label>
                  <MoveRight />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/repr-coverage/create"}>
                <Button className="flex justify-between items-center p-2 cursor-pointer hover:text-sky-600 gap-x-3">
                  <label>대표담보 생성 페이지</label>
                  <MoveRight />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/repr-coverage/display"}>
                <Button className="flex justify-between items-center p-2 cursor-pointer hover:text-sky-600 gap-x-3">
                  <label>대표담보 조회 페이지</label>
                  <MoveRight />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/repr-coverage/term/edit"}>
                <Button className="flex justify-between items-center p-2 cursor-pointer hover:text-sky-600 gap-x-3">
                  <label>대표담보 약관 작성 페이지</label>
                  <MoveRight />
                </Button>
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}
