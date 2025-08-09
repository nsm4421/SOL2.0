"use client";

import getOrderedDepth from "@/lib/term-editor/get-ordered-depth";
import getSiblingIndex from "@/lib/term-editor/get-sibling-index";
import getPrefix from "@/lib/term-editor/prefix";
import { isElement } from "@udecode/plate-common";
import { PlateElementProps, useEditorRef } from "platejs/react";
import { Node, Path, Element as SlateElement } from "slate";
import { ReactEditor } from "slate-react";

/** li: 부모가 ol일 때만 depth별 prefix */
export default function CustomListItem(props: PlateElementProps) {
  const { attributes, children, element } = props as any;
  const editor = useEditorRef();

  let path: Path | null = null;
  try {
    path = ReactEditor.findPath(
      editor as unknown as ReactEditor,
      element as SlateElement
    );
  } catch {
    // path 못 찾으면 기본 li 렌더
    return <li {...attributes}>{children}</li>;
  }

  const parent = Node.get(editor, Path.parent(path)) as any;
  const isOrderedParent = isElement(parent) && parent.type === "ol";

  if (!isOrderedParent) {
    // 불릿(ul)은 기본 li
    return (
      <li {...attributes} className="pl-0">
        {children}
      </li>
    );
  }

  const depth = getOrderedDepth(editor, path);

  return (
    <li {...attributes} data-id={element.id} className="flex gap-2 pl-0">
      <span
        aria-hidden
        className={
          depth >= 3
            ? "w-8 text-right select-none"
            : "w-6 text-center select-none"
        }
      >
        {getPrefix({ depth, index: getSiblingIndex(path) })}
      </span>
      <div className="flex-1">{children}</div>
    </li>
  );
}
