function toCircled(n: number): string {
  const table = [
    "①",
    "②",
    "③",
    "④",
    "⑤",
    "⑥",
    "⑦",
    "⑧",
    "⑨",
    "⑩",
    "⑪",
    "⑫",
    "⑬",
    "⑭",
    "⑮",
    "⑯",
    "⑰",
    "⑱",
    "⑲",
    "⑳",
  ];
  return table[n - 1] ?? String(n);
}

function toHangul(n: number): string {
  const table = [
    "가",
    "나",
    "다",
    "라",
    "마",
    "바",
    "사",
    "아",
    "자",
    "차",
    "카",
    "타",
    "파",
    "하",
    "거",
    "너",
    "더",
    "러",
    "머",
    "버",
  ];
  return table[n - 1] ?? String(n);
}

interface Props {
  depth: number;
  index: number;
}
export default function getPrefix({ depth, index }: Props) {
  switch (depth) {
    case 1:
      return `[${index}]`;
    case 2:
      return toCircled(index);
    case 3:
      return toHangul(index);
    default:
      console.warn("index is not valie");
      return "????";
  }
}
