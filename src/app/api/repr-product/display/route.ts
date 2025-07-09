import { IntegreatedProduct } from "@/models/repr-product";
import { NextResponse } from "next/server";

/// 통합상품 목록(Mock Data)를 return하는 API 
export async function GET(): Promise<Response> {
  return NextResponse.json<IntegreatedProduct[]>([
    {
      code: "MP00001",
      name: "통합간편건강보험",
      children: [
        {
          code: "60001",
          name: "통합간편건강보험(통합간편심사형)",
          children: [
            {
              code: "6AAAA",
              name: "통합간편건강보험(통합간편심사형)2504",
              revisionDate: "2024-07-01",
            },
          ],
        },
        {
          code: "60002",
          name: "통합간편건강보험(355입원,수술고지형)",
          children: [
            {
              code: "6AAAB",
              name: "통합간편건강보험(355입원,수술고지형)2504",
              revisionDate: "2024-04-01",
            },
          ],
        },
        {
          code: "60003",
          name: "통합간편건강보험(일반심사형)",
          children: [
            {
              code: "6AAAC",
              name: "통합간편건강보험(일반심사형)2504",
              revisionDate: "2024-04-01",
            },
          ],
        },
      ],
    },
    {
      code: "MP00002",
      name: "알파Plus보장보험",
      children: [
        {
          code: "61001",
          name: "알파Plus보장보험",
          children: [
            {
              code: "6BAAA",
              name: "무배당 알파Plus보장보험2504",
              revisionDate: "2024-07-01",
            },
          ],
        },
        {
          code: "61002",
          name: "무배당 M-Basket케어프리 보장보험",
          children: [
            {
              code: "6BAAB",
              name: "무배당 M-Basket케어프리 보장보험2504",
              revisionDate: "2024-07-01",
            },
          ],
        },
      ],
    },

    {
      code: "MP00003",
      name: "운전자상해보험",
      children: [
        {
          code: "62001",
          name: "운전자 상해보장보험",
          children: [
            {
              code: "6CAAA",
              name: "무배당 운전자 상해보장보험2504",
              revisionDate: "2024-04-01",
            },
          ],
        },
        {
          code: "62002",
          name: "무배당 운전자 상해보장보험(단체계약형)",
          children: [
            {
              code: "6CAAB",
              name: "무배당 운전자 상해보장보험(단체계약형)2504",
              revisionDate: "2024-07-01",
            },
          ],
        },
      ],
    },
  ]);
}
