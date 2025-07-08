import { Button } from "@/components/ui/button";
import { Move, MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex justify-center h-full">
      <div className="mx-auto my-auto">
        <main>
          <h1 className="mb-5 font-bold text-xl">SOL2.0 디지안 시안</h1>

          <Link href={"/display-products"}>
            <Button className="flex justify-between items-center p-2 cursor-pointer hover:text-sky-600">
              <span>Display Products Page</span>
              <MoveRight />
            </Button>
          </Link>
        </main>
      </div>
    </div>
  );
}
