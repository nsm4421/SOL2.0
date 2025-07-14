"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileDownIcon, Workflow } from "lucide-react";
import { DisplayProductRow } from "@/types/repr-product";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function getColumns(
  router: AppRouterInstance
): ColumnDef<DisplayProductRow>[] {
  const handleNavigateToUnitHistModeingPage = (id: string) => () => {
    router.push(`/product/unit-hist/${id}`);
  };
  return [
    {
      accessorKey: "integratedCode",
      header: "통합상품",
      cell: ({ row }: { row: Row<DisplayProductRow> }) =>
        row.original.integratedProductVisibile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="font-medium cursor-pointer">
                {row.original.integratedProductCode}
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
      accessorKey: "integratedProductName",
      header: "통합상품명",
      cell: ({ row }: { row: Row<DisplayProductRow> }) =>
        row.original.integratedProductVisibile ? (
          <div className="font-normal">
            {row.original.integratedProductName}
          </div>
        ) : null,
    },

    {
      accessorKey: "integratedProductRevisionDate",
      header: () => <span className="text-muted-foreground">개정일자</span>,
      cell: ({ row }: { row: Row<DisplayProductRow> }) =>
        row.original.integratedProductVisibile ? (
          <div className="text-xs text-muted-foreground">
            {row.original.integratedProductRevisionDate}
          </div>
        ) : null,
    },
    {
      accessorKey: "unitHistProductCode",
      header: "단위상품이력코드",
      cell: ({ row }: { row: Row<DisplayProductRow> }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="font-medium cursor-pointer">
              {row.original.unitHistProductCode}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={handleNavigateToUnitHistModeingPage(
                row.original.unitHistProductCode
              )}
            >
              <Workflow />
              <label>상품 모델링</label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileDownIcon />
              <label>약관 다운로드</label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileDownIcon />
              <label>PV 다운로드</label>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
    {
      accessorKey: "unitHistProductName",
      header: "단위상품이력코드명",
      cell: ({ row }: { row: Row<DisplayProductRow> }) => (
        <div className="font-normal">{row.original.unitHistProductName}</div>
      ),
    },
    {
      accessorKey: "unitHistProductRevisionDate",
      header: () => <span className="text-muted-foreground">개정일자</span>,
      cell: ({ row }: { row: Row<DisplayProductRow> }) => (
        <div className="text-xs text-muted-foreground">
          {row.original.unitHistProductRevisionDate}
        </div>
      ),
    },
  ];
}
