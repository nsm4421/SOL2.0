export type CoverageCategory = "상해" | "질병" | "상해및질병" | "비용";

/// 대표담보
export type ReprCoverage = {
  code?: string;
  name: string;
  category?: CoverageCategory;
  children: DetailedCoverage[];
};

/// 세부보장
export type DetailedCoverage = {
  name?: string;
  category?: CoverageCategory;
  benefits: BenefitUnit[];
};

/// 급부
export type BenefitUnit = {
  name?: string;
  qBenefit? : string;
};
