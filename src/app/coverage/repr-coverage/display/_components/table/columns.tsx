"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Code, Edit, LetterText } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReprCovRow from "../../_lib/repr-cov-row";
import EditModeingPannel from "../modeling/edit-modeling-pannel";
import EditTermPannel from "../term/edit-term-pannel";

export const columns: ColumnDef<ReprCovRow>[] = [
  {
    accessorKey: "cateory",
    header: "카테고리",
    cell: ({ row }: { row: Row<ReprCovRow> }) =>
      row.original.reprCovCode ? (
        <div className="font-medium">{row.original.cateory}</div>
      ) : null,
  },
  {
    accessorKey: "reprCovCode",
    header: "대표담보코드",
    cell: ({ row }: { row: Row<ReprCovRow> }) =>
      row.original.reprCovCode ? (
        <div className="font-medium">{row.original.reprCovCode}</div>
      ) : null,
  },
  {
    accessorKey: "reprCovName",
    header: "대표담보명",
    cell: ({ row }: { row: Row<ReprCovRow> }) =>
      row.original.reprCovCode ? (
        <div className="font-medium">{row.original.reprCovName}</div>
      ) : null,
  },
  {
    accessorKey: "refernceDate",
    header: "기준일자",
    cell: ({ row }: { row: Row<ReprCovRow> }) =>
      row.original.refernceDate ? (
        <div className="font-medium">{row.original.refernceDate}</div>
      ) : null,
  },
  {
    accessorKey: "icons",
    header: "",
    cell: ({ row }: { row: Row<ReprCovRow> }) =>
      row.original.refernceDate ? (
        <div className="font-medium flex justify-start gap-x-5">
          {/* 담보코드 매핑 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="cursor-pointer flex gap-x-3 items-center w-20 px-2"
              >
                <Edit />
                <label className="cursor-pointer">Edit</label>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>대표담보 수정하기</DropdownMenuLabel>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <LetterText />
                  <label className="cursor-pointer">담보명 변경</label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <Code />
                  <label className="cursor-pointer">당사 담보코드 매핑</label>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* PV 모델링 */}
          <EditModeingPannel code={row.original.reprCovCode} />

          {/* 대표담보 약관 */}
          <EditTermPannel code={row.original.reprCovCode} />
        </div>
      ) : null,
  },
];
