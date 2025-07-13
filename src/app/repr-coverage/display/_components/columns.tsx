"use client";

import { ColumnDef, Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDown,
  Book,
  CaseUpper,
  CheckCircle,
  ChevronDown,
  Circle,
  Delete,
  DropletIcon,
  EditIcon,
  FileDownIcon,
  LayoutPanelTop,
  Notebook,
  PencilLine,
  Search,
  Workflow,
  X,
} from "lucide-react";
import ReprCovRow from "../_lib/repr-cov-row";
import { Button } from "@/components/ui/button";

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
          {/* 대표담보 모델링 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="cursor-pointer flex gap-x-3 items-center w-20 px-2"
              >
                <LayoutPanelTop />
                <label className="cursor-pointer">모델링</label>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>대표담보 PV모델링</DropdownMenuLabel>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <Search />
                  <label className="cursor-pointer">조회하기</label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <EditIcon />
                  <label className="cursor-pointer">수정하기</label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <X />
                  <label className="cursor-pointer">삭제하기</label>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 대표담보 약관 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="cursor-pointer flex gap-x-3 items-center w-20 px-2"
              >
                <Book />
                <label className="cursor-pointer">약관</label>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>대표담보 약관</DropdownMenuLabel>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <Search />
                  <label className="cursor-pointer">조회하기</label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <PencilLine />
                  <label className="cursor-pointer">작성하기</label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <EditIcon />
                  <label className="cursor-pointer">수정하기</label>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* 담보코드 매핑 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="cursor-pointer flex gap-x-3 items-center w-20 px-2"
              >
                <CaseUpper />
                <label className="cursor-pointer">코드</label>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>당사담보코드 매핑</DropdownMenuLabel>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <Search />
                  <label className="cursor-pointer">조회하기</label>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-between gap-x-3 items-center cursor-pointer">
                  <PencilLine />
                  <label className="cursor-pointer">작성하기</label>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : null,
  },
];
