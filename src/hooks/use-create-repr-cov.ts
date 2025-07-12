import {
  CoverageCategory,
  DetailedCoverage,
  ReprCoverage,
} from "@/models/repr-coverage";
import { create } from "zustand";

type ReprCovState = {
  repr: ReprCoverage;
  setName: (name: string) => void;
  setCategory: (category: CoverageCategory) => void;
  addDetail: (detail: DetailedCoverage) => void;
  updateDetail: (index: number, detail: Partial<DetailedCoverage>) => void;
  removeDetail: (index: number) => void;
  reset: () => void;
};

export const useCreateReprCov = create<ReprCovState>((set) => ({
  repr: {
    name: "",
    category: undefined,
    children: [
      {
        code: "",
        name: "",
        category: undefined,
        benefitUnit: {},
      },
    ],
  },

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

  updateDetail: (index, updatedDetail) =>
    set((state) => ({
      repr: {
        ...state.repr,
        children: state.repr.children.map((d, i) =>
          i === index ? { ...d, ...updatedDetail } : d
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

  reset: () =>
    set(() => ({
      repr: {
        name: "",
        category: undefined,
        children: [],
      },
    })),
}));
