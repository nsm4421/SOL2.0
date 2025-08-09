import { isElement } from "@udecode/plate-common";
import { Node, Path } from "slate";

// ol 조상 개수(ordered 깊이)
export default function getOrderedDepth(editor: any, path: Path) {
  let d = 0;
  let p: Path = path.slice(0, -1);
  while (p.length) {
    const parent = Node.get(editor, p) as any;
    if (isElement(parent) && parent.type === "ol") d += 1;
    p = p.slice(0, -1);
  }
  return d;
}
