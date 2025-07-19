"use client";

import { Row } from "@tanstack/react-table";
import { DisplayProductRelationRow } from "@/types/repr-product";
const columns = [
  {
    accessorKey: "mainProductCode",
    header: "주계약 상품코드",
    cell: ({ row }: { row: Row<DisplayProductRelationRow> }) =>
      row.original.mainProductVisibile ? (
        <p>{row.original.mainProductCode}</p>
      ) : null,
  },
  {
    accessorKey: "mainProductName",
    header: "주계약 상품명",
    cell: ({ row }: { row: Row<DisplayProductRelationRow> }) =>
      row.original.mainProductVisibile ? (
        <p>{row.original.mainProductName}</p>
      ) : null,
  },

  {
    accessorKey: "mainProductRevisionDate",
    header: () => <span className="text-muted-foreground">개정일자</span>,
    cell: ({ row }: { row: Row<DisplayProductRelationRow> }) =>
      row.original.mainProductVisibile ? (
        <p>{row.original.mainProductRevisionDate}</p>
      ) : null,
  },
  {
    accessorKey: "indpProductCode",
    header: "독립특약 상품코드",
    cell: ({ row }: { row: Row<DisplayProductRelationRow> }) => (
      <div className="font-normal">{row.original.indpProductCode}</div>
    ),
  },
  {
    accessorKey: "indpProductName",
    header: "독립특약 상품명",
    cell: ({ row }: { row: Row<DisplayProductRelationRow> }) => (
      <div className="font-normal">{row.original.indpProductName}</div>
    ),
  },
  {
    accessorKey: "indpProductRevisionDate",
    header: () => (
      <span className="text-muted-foreground">독립특약 개정일자</span>
    ),
    cell: ({ row }: { row: Row<DisplayProductRelationRow> }) => (
      <div className="font-normal">{row.original.indpProductRevisionDate}</div>
    ),
  },
];

export default columns;
