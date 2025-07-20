type ProductTermCategory = "일반" | "실손" | "저축" | "펫" | "재물(화재손해)";

export const ProductTermCategories: ProductTermCategory[] = [
  "일반",
  "실손",
  "저축",
  "펫",
  "재물(화재손해)",
];

export type WavierProperty = {};

export type SurrenderType = {};

type simpleInsuranceCategory =
  | "표준체"
  | "5-10년내 입원수술"
  | "305(6대)"
  | "3/1/5(6대)"
  | "3/2/5(6대)"
  | "3/2/5"
  | "3/3/5"
  | "3/4/5"
  | "3/5/5(6대)"
  | "3/5/5(입원고지형)"
  | "3/5/5(수술고지형)"
  | "3/5/5(10대)"
  | "3/6/5"
  | "3/7/5"
  | "3/8/5"
  | "3/9/5"
  | "3/10/5";

export type SimpleInsuranceType = {
  type: string;
  categories: simpleInsuranceCategory[];
};

export const SimpleInsuranceTypes: SimpleInsuranceType[] = [
  {
    type: "일반심사형",
    categories: ["표준체"],
  },
  {
    type: "건강고지",
    categories: ["5-10년내 입원수술"],
  },
  {
    type: "편한심사형",
    categories: ["3/5/5(10대)"],
  },
  {
    type: "355입원수술고지형",
    categories: ["3/5/5(입원고지형)", "3/5/5(수술고지형)"],
  },
  {
    type: "통합간편심사형",
    categories: [
      "305(6대)",
      "3/1/5(6대)",
      "3/2/5(6대)",
      "3/2/5",
      "3/3/5",
      "3/4/5",
      "3/5/5(6대)",
      "3/6/5",
      "3/7/5",
      "3/8/5",
      "3/9/5",
      "3/10/5",
    ],
  },
];

type renewType = "갱신형 연만기" | "세만기" | "비갱신형 연만기";

export const RenewTypes: renewType[] = [
  "갱신형 연만기",
  "세만기",
  "비갱신형 연만기",
];

type otherSpecialRider =
  | "자동갱신 특별약관"
  | "피보험자추가 특별약관"
  | "계약전환 특별약관"
  | "출생전자녀가입 특별약관"
  | "종업원 배상책임 부담보 특별약관"
  | "가사도우미 프로그램(상해사고부상치료비(1-3등급))";

export const OtherSpecialRiders: otherSpecialRider[] = [
  "자동갱신 특별약관",
  "피보험자추가 특별약관",
  "계약전환 특별약관",
  "출생전자녀가입 특별약관",
  "종업원 배상책임 부담보 특별약관",
  "가사도우미 프로그램(상해사고부상치료비(1-3등급))",
];

export type UnitHistProduct = {
  category: string; // 표준안유형
  isGroup: boolean; // 단체계약여부
  isFetus: boolean; // 태아보장여부
  otherSpecialRiders: string[]; // 기타특별약관
  surrenderProperty: SurrenderType; // 무저해지 유형
  wavierProperty: WavierProperty; // 납입면제 유형
  hasSaving: boolean; // 적립담보 존재여부
  renewType: string; // 갱신형/비갱신형 유형
  simpleInsuranceType: SimpleInsuranceType;
};
