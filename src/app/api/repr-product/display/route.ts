import { FetchProductsResponse } from "@/types/repr-product";
import { NextRequest, NextResponse } from "next/server";

/// 통합상품 목록(Mock Data)를 return하는 API
export async function GET(req: NextRequest): Promise<Response> {

  // 기준일자나 검색을 파싱
  // const { searchParams } = req.nextUrl;

  // const date = searchParams.get("date");
  // const q = searchParams.get("q");

  // if (!date || !q) {
  //   return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  // }


  // 해당 기준일자에 해당하는 통합상품, 단위상품이력을 return
  return NextResponse.json<FetchProductsResponse>([
    {
      integratedProduct: {
        code: "MP00001",
        name: "통합간편건강보험",
        revisionDate: "2025-07-01",
      },
      unitHistProducts: [
        {
          code: "6AAAA",
          name: "통합간편건강보험(통합간편심사형)2507",
          revisionDate: "2025-07-01",
        },
        {
          code: "6AAAB",
          name: "통합간편건강보험(355입원,수술고지형)2507",
          revisionDate: "2025-07-01",
        },
        {
          code: "6AAAC",
          name: "통합간편건강보험(일반심사형)2504",
          revisionDate: "2025-04-01",
        },
      ],
    },
    {
      integratedProduct: {
        code: "MP00002",
        name: "알파Plus보장보험",
        revisionDate: "2025-07-01",
      },
      unitHistProducts: [
        {
          code: "6BAAA",
          name: "무배당 알파Plus보장보험2504",
          revisionDate: "2025-07-01",
        },
        {
          code: "6BAAB",
          name: "무배당 M-Basket케어프리 보장보험2504",
          revisionDate: "2025-07-01",
        },
      ],
    },
    {
      integratedProduct: {
        code: "MP00003",
        name: "운전자상해보험",
        revisionDate: "2025-04-01",
      },
      unitHistProducts: [
        {
          code: "6CAAA",
          name: "무배당 운전자 상해보장보험2504",
          revisionDate: "2025-04-01",
        },
        {
          code: "6CAAB",
          name: "무배당 운전자 상해보장보험(단체계약형)2504",
          revisionDate: "2025-04-01",
        },
      ],
    },
    {
      integratedProduct: {
        code: "MP00004",
        name: "무배당 내Mom같은 어린이보험",
        revisionDate: "2025-04-01",
      },
      unitHistProducts: [
        {
          code: "6DAAA",
          name: "무배당 내Mom같은 어린이보험2504",
          revisionDate: "2025-04-01",
        },
      ],
    },
  ]);
}
