"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { FetchProductsResponse } from "@/types/repr-product";
import { ChevronDown, CornerDownRight } from "lucide-react";

interface Props {
  data: FetchProductsResponse;
}

export default function ProductsTable({ data }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {data.map((integratedProduct) => (
        <AccordionItem
          value={integratedProduct.integratedProduct.code}
          key={integratedProduct.integratedProduct.code}
        >
          <AccordionTrigger className="flex flex-row-reverse justify-between">
            <div className="w-full flex justify-between">
              <div className="w-full flex gap-x-5 items-center">
                <span>[{integratedProduct.integratedProduct.code}]</span>
                <span>{integratedProduct.integratedProduct.name}</span>
              </div>
              <span className="text-xs min-w-fit">
                {integratedProduct.integratedProduct.revisionDate}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4 text-balance">
            <ul className="ml-9 flex flex-col gap-y-3">
              {integratedProduct.unitHistProducts.map((unitHistProduct) => (
                <li
                  key={unitHistProduct.code}
                  className="flex gap-x-2 items-start"
                >
                  <CornerDownRight className="size-4 mt-3" />
                  <Card className="p-2 w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-3">
                        <span>[ {unitHistProduct.code}]</span>
                        <span> {unitHistProduct.name}</span>
                      </div>

                      <span>{unitHistProduct.revisionDate}</span>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
