import { ReprCoverage } from "@/models/repr-coverage";
import { NextResponse } from "next/server";

/// 통합담보 목록(Mock Data)를 return하는 API
export async function GET(): Promise<Response> {
  return NextResponse.json<ReprCoverage[]>([
    {
      code: "6ZZZ1",
      name: "일반상해후유장해",
      category: "상해",
      children: [
        {
          category: "상해",
          benefits: [
            {
              qBenefit: "MR00001",
            },
          ],
        },
      ],
    },

    {
      code: "6ZZZ2",
      name: "항암방사선약물치료비",
      category: "질병",
      children: [
        {
          category: "질병",
          benefits: [
            {
              name: "항암방사선약물치료(암(유사암제외))",
              qBenefit: "MR00002",
            },
            {
              name: "항암방사선약물치료(기타피부암)",
              qBenefit: "MR00003",
            },
            {
              name: "항암방사선약물치료(갑상선암)",
              qBenefit: "MR00004",
            },
          ],
        },
      ],
    },

    {
      code: "6ZZZ3",
      name: "수술비[1-5종]",
      category: "상해및질병",
      children: [
        {
          category: "상해",
          benefits: [
            {
              name: "상해1종",
              qBenefit: "MR00005",
            },
          ],
        },
        {
          category: "상해",
          benefits: [
            {
              name: "상해2종",
              qBenefit: "MR00006",
            },
          ],
        },
        {
          category: "상해",
          benefits: [
            {
              name: "상해3종",
              qBenefit: "MR00007",
            },
          ],
        },
        {
          category: "상해",
          benefits: [
            {
              name: "상해4종",
              qBenefit: "MR00008",
            },
          ],
        },
        {
          category: "상해",
          benefits: [
            {
              name: "상해5종",
              qBenefit: "MR00009",
            },
          ],
        },

        {
          category: "질병",
          benefits: [
            {
              name: "질병1종",
              qBenefit: "MR00015",
            },
          ],
        },
        {
          category: "질병",
          benefits: [
            {
              name: "질병2종",
              qBenefit: "MR00016",
            },
          ],
        },
        {
          category: "질병",
          benefits: [
            {
              name: "질병3종",
              qBenefit: "MR00017",
            },
          ],
        },
        {
          category: "질병",
          benefits: [
            {
              name: "질병4종",
              qBenefit: "MR00018",
            },
          ],
        },
        {
          category: "질병",
          benefits: [
            {
              name: "질병5종",
              qBenefit: "MR00019",
            },
          ],
        },
      ],
    },
  ]);
}
