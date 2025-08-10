import { create } from "zustand";
import type { CustomMentionItem } from "@/types/custom-mention";

type CustomMentionsStore = {
  mentions: CustomMentionItem[];
  /** 전체 교체 */
  setMentions: (
    next:
      | CustomMentionItem[]
      | ((prev: CustomMentionItem[]) => CustomMentionItem[])
  ) => void;
  /** 현재 값 가져오기 */
  getMentions: () => CustomMentionItem[];
  // 삭제하기
  deleteByMentionId: (id: string) => void;
};

export const useCustomMentions = create<CustomMentionsStore>((set, get) => ({
  mentions: [],
  setMentions: (next) =>
    set({
      mentions:
        typeof next === "function" ? (next as any)(get().mentions) : next,
    }),
  getMentions: () => get().mentions,
  deleteByMentionId: (id: string) =>
    set({
      mentions: get().mentions.filter((e) => e.id !== id),
    }),
}));
