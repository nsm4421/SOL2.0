import {
  SimpleInsuranceType,
  SimpleInsuranceTypes,
  UnitHistProduct,
} from "@/models/unit-hist-product";
import { create } from "zustand";

type UnitHistProductState = {
  prod: UnitHistProduct;
  getIsGroup: () => boolean;
  getIsFetus: () => boolean;
  getOtherSpecialRiders: () => string[];
  getSimpleInsuranceType: () => SimpleInsuranceType;
  setCategory: (v: string) => void;
  setIsGroup: (v: boolean) => void;
  setIsFetus: (v: boolean) => void;
  setRenewType: (v: string) => void;
  setOtherSpecialRiders: (v: string[]) => void;
  setSimpleInsuranceType: (v: SimpleInsuranceType) => void;
};

export const useUnitHistModel = create<UnitHistProductState>((set, get) => ({
  prod: {
    category: "일반",
    isGroup: false,
    isFetus: false,
    otherSpecialRiders: [],
    surrenderProperty: {},
    wavierProperty: {},
    hasSaving: false,
    renewType: "갱신형 연만기",
    simpleInsuranceType: SimpleInsuranceTypes[0],
  },
  getIsGroup: () => get().prod.isGroup,
  getIsFetus: () => get().prod.isFetus,
  getOtherSpecialRiders: () => get().prod.otherSpecialRiders,
  getSimpleInsuranceType: () => get().prod.simpleInsuranceType,
  setCategory: (v: string) =>
    set((state) => ({
      ...state,
      prod: {
        ...state.prod,
        category: v,
      },
    })),
  setIsGroup: (v: boolean) =>
    set((state) => ({
      ...state,
      prod: {
        ...state.prod,
        isGroup: v,
      },
    })),

  setIsFetus: (v: boolean) =>
    set((state) => ({
      ...state,
      prod: {
        ...state.prod,
        isFetus: v,
      },
    })),
  setRenewType: (v: string) =>
    set((state) => ({
      ...state,
      prod: {
        ...state.prod,
        renewType: v,
      },
    })),
  setOtherSpecialRiders: (v: string[]) =>
    set((state) => ({
      ...state,
      prod: {
        ...state.prod,
        otherSpecialRiders: v,
      },
    })),
  setSimpleInsuranceType: (v: SimpleInsuranceType) =>
    set((state) => ({
      ...state,
      prod: {
        ...state.prod,
        simpleInsuranceType: v,
      },
    })),
}));
