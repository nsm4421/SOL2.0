import { CustomMentionItem, CustomMentionNode } from "@/types/custom-mention";

/** 런타임 가드 */
export function isCustomMentionItem(x: any): x is CustomMentionItem {
  return !!x && typeof x.id === "string" && typeof x.label === "string";
}

/** 아이템 → mention 노드 */
export function toCustomMentionNode(
  item: CustomMentionItem
): CustomMentionNode {
  return {
    type: "mention",
    refId: item.id,
    value: item.value ?? item.label,
    href: item.href,
    text: item.text,
    meta: item.meta,
    children: [{ text: "" }],
  };
}

/** mention 노드 → 아이템(필요할 때 사용) */
export function fromCustomMentionNode(node: any): CustomMentionItem | null {
  if (!node || node.type !== "mention") return null;
  return {
    id: node.refId ?? "",
    label: node.value ?? "",
    value: node.value,
    href: node.href,
    text: node.text,
    meta: node.meta,
  };
}

/** Combobox에 넣기 쉬운 간단 아이템 형태(Plate 의존 없이 사용 가능) */
export type SimpleComboboxItem<T = unknown> = {
  key: string;
  text: string;
  data?: T;
};

export function toComboboxItem(
  item: CustomMentionItem
): SimpleComboboxItem<CustomMentionItem> {
  return { key: item.id, text: item.label, data: item };
}
