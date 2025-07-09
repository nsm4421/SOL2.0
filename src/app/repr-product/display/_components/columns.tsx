"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import { ProductRow } from "../_lib/flatten";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileDownIcon, Workflow } from "lucide-react";

export const columns: ColumnDef<ProductRow>[] = [
  {
    accessorKey: "integratedCode",
    header: "통합상품",
    cell: ({ row }: { row: Row<ProductRow> }) =>
      row.original.showIntegrated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
             <div className="cursor-pointer">
              <div className="font-medium">{row.original.integratedCode}</div>
              <div className="text-xs text-muted-foreground">
                {row.original.integratedName}
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Workflow />
              <label>별지 모델링</label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileDownIcon />
              <label>별지 다운로드</label>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null,
  },
  {
    accessorKey: "reprCode",
    header: "대표상품",
    cell: ({ row }: { row: Row<ProductRow> }) =>
      row.original.showRepr ? (
        <>
          <div className="font-medium">{row.original.reprCode}</div>
          <div className="text-xs text-muted-foreground">
            {row.original.reprName}
          </div>
        </>
      ) : null,
  },
  {
    accessorKey: "unitCode",
    header: "단위상품",

    cell: ({ row }: { row: Row<ProductRow> }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <div className="font-medium">{row.original.unitCode}</div>
            <div className="text-xs text-muted-foreground">
              {row.original.unitName}
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem>
            <Workflow />
            <label>약관 모델링</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileDownIcon />
            <label>약관 다운로드</label>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    accessorKey: "revisionDate",
    header: "개정일자",
  },
];
