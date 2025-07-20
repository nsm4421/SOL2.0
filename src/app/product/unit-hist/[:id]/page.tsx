import AppNavbar from "@/components/navbar";
import CommonTermDiv from "./_components/common-term-div";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import { Card } from "@/components/ui/card";

interface Props {
  params: {
    id: string;
  };
}

export default async function UnitHistProductModelingPage({
  params: { id },
}: Props) {
  return (
    <>
      <AppNavbar label={"상품모델링"} />
      <main className="flex flex-col gap-y-3 py-3 px-2">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value={"common-term-div"}>
            <AccordionTrigger>
              <h3>보통약관 구분자</h3>
            </AccordionTrigger>
            <AccordionContent>
              <AccordionContent
                className="flex flex-col gap-4 text-balance"
                asChild
              >
                  <CommonTermDiv />
              </AccordionContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
