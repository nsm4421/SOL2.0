import { FetchProductRelationResponse } from "@/types/repr-product";
import { NextRequest, NextResponse } from "next/server";

/// 통합상품 기준 주특관계를 return하는 API
export async function GET(req: NextRequest): Promise<Response> {
  // 기준일자나 검색을 파싱
  // const { searchParams } = req.nextUrl;

  // const date = searchParams.get("date");
  // const q = searchParams.get("q");

  // if (!date || !q) {
  //   return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  // }

  return NextResponse.json<FetchProductRelationResponse>([
    {
      mainCtrProudct: {
        code: "6AAAA",
        name: "알파Plus보장보험2507",
        revisionDate: "2025-07-01",
      },
      indpCtrProducts: [
        {
          code: "6BAAA",
          name: "가족일상생활배생책임 특별약관2504",
          revisionDate: "2025-04-01",
        },
        {
          code: "6BAAB",
          name: "간병인지원 일반상해입원일당 특별약관2504",
          revisionDate: "2025-04-01",
        },
        {
          code: "6BAAC",
          name: "간병인지원 질병입원일당 특별약관2504",
          revisionDate: "2025-04-01",
        },
        {
          code: "6BAAD",
          name: "3대질병진단비보장 특별약관2507",
          revisionDate: "2025-07-01",
        },
      ],
    },
  ]);
}
