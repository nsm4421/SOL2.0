import { CustomElement } from "@/types/slate";
import { Editor, Transforms, Element as SlateElement } from "slate";

export default function toggleBlock(editor: Editor, format: string) {
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });
  const isActive = !!match;
  const isList = format === "bulleted-list" || format === "numbered-list";

  // ordered list인 경우 depth <= 3
  if (format === "numbered-list") {
    const path = Editor.path(editor, editor.selection?.anchor ?? [0]);
    const listDepth = path.filter((_, i) => {
      const node = Editor.node(editor, path.slice(0, i + 1))[0];
      return SlateElement.isElement(node) && node.type === "numbered-list";
    }).length;
    if (listDepth >= 3) {
      return;
    }
  }

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      (n.type === "bulleted-list" || n.type === "numbered-list"),
    split: true,
  });

  const newType: CustomElement["type"] = isActive
    ? "paragraph"
    : isList
    ? "list-item"
    : format;

  Transforms.setNodes(editor, { type: newType });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
}
