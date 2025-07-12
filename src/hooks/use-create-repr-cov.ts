import {
  BenefitUnit,
  CoverageCategory,
  DetailedCoverage,
  ReprCoverage,
} from "@/models/repr-coverage";
import { create } from "zustand";

type ReprCovState = {
  repr: ReprCoverage;
  getDetCov: (detCovIndex: number) => DetailedCoverage;
  getBenefitUnit: (detCovIndex: number, benefitIndex: number) => BenefitUnit;
  setName: (name: string) => void;
  setCategory: (category: CoverageCategory) => void;
  addDetail: (detail: DetailedCoverage) => void;
  updateDetail: (
    detCovIndex: number,
    detail: Partial<DetailedCoverage>
  ) => void;
  removeDetail: (detCovIndex: number) => void;
  addBenefit: (detCovIndex: number, benefit: BenefitUnit) => void;
  remveBenefit: (detCovIndex: number, benefitIndex: number) => void;
};

export const useCreateReprCov = create<ReprCovState>((set, get) => ({
  repr: {
    name: "",
    category: undefined,
    children: [
      {
        code: "",
        name: "",
        category: undefined,
        benefits: [{}],
      },
    ],
  },

  getDetCov: (detCovIndex: number) => get().repr.children[detCovIndex],

  getBenefitUnit: (detCovIndex: number, benefitIndex: number) =>
    get().getDetCov(detCovIndex).benefits[benefitIndex],

  setName: (name) =>
    set((state) => ({
      repr: {
        ...state.repr,
        name,
      },
    })),

  setCategory: (category) =>
    set((state) => ({
      repr: {
        ...state.repr,
        category,
      },
    })),

  addDetail: (detail) =>
    set((state) => ({
      repr: {
        ...state.repr,
        children: [...state.repr.children, detail],
      },
    })),

  updateDetail: (detCovIndex, updatedDetail) =>
    set((state) => ({
      repr: {
        ...state.repr,
        children: state.repr.children.map((d, i) =>
          i === detCovIndex ? { ...d, ...updatedDetail } : d
        ),
      },
    })),

  removeDetail: (index) =>
    set((state) => ({
      repr: {
        ...state.repr,
        children: state.repr.children.filter((_, i) => i !== index),
      },
    })),

  addBenefit: (detCovIndex) =>
    set((state) => ({
      repr: {
        ...state.repr,
        children: state.repr.children.map((detCov, idx) =>
          idx === detCovIndex
            ? { ...detCov, benefits: [...detCov.benefits, {}] }
            : detCov
        ),
      },
    })),

  remveBenefit: (detCovIndex, benefitIndex) =>
    set((state) => ({
      repr: {
        ...state.repr,
        children: state.repr.children.map((detCov, idx) =>
          detCovIndex === idx
            ? {
                ...detCov,
                benefits: [...detCov.benefits].filter(
                  (_, idx) => idx !== benefitIndex
                ),
              }
            : detCov
        ),
      },
    })),
}));
