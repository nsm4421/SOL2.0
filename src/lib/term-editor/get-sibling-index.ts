import { Path } from "slate";

/** 현재 li의 1-based 형제 인덱스 */
export default function getSiblingIndex(path: Path) {
  return (path[path.length - 1] as number) + 1;
}
