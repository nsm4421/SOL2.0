import { Editor, Transforms, Element as SlateElement } from "slate";
import toggleFormat from "./toggle-format";
import { ReactEditor } from "slate-react";

interface Props {
  editor: ReactEditor;
  event: React.KeyboardEvent<HTMLDivElement>;
}

export default function keyboardHandler({ editor, event }: Props) {
  if (event.key === "Tab" && !event.shiftKey) {
    onIndentNumberedList({ editor, event });
  } else if (event.key === "Tab" && event.shiftKey) {
    onOutdentNumberedList({ editor, event });
  } else if (event.ctrlKey && (event.key === "b" || event.key === "B")) {
    onToggleBold({ editor, event });
  } else if (event.ctrlKey && (event.key === "i" || event.key === "I")) {
    onToggleItalic({ editor, event });
  } else if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
    onToggleUnderline({ editor, event });
  }
}

function onToggleBold({ editor, event }: Props) {
  event.preventDefault();
  toggleFormat(editor, "bold");
}

function onToggleItalic({ editor, event }: Props) {
  event.preventDefault();
  toggleFormat(editor, "italic");
}

function onToggleUnderline({ editor, event }: Props) {
  event.preventDefault();
  toggleFormat(editor, "underline");
}

function onIndentNumberedList({ editor, event }: Props) {
  event.preventDefault();
  const { selection } = editor;
  if (!selection) return;

  const [nodeEntry] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      n.type === "list-item",
  });
  if (!nodeEntry) return;

  const [node, path] = nodeEntry;
  const currentDepth = typeof node.depth === "number" ? node.depth : 0;

  if (currentDepth >= 3) return;

  Transforms.setNodes(
    editor,
    { depth: currentDepth + 1 },
    { at: path }
  );

  Transforms.wrapNodes(
    editor,
    { type: "numbered-list", children: [] },
    {
      at: path,
      match: (n) => SlateElement.isElement(n) && n.type === "list-item",
    }
  );
}

function onOutdentNumberedList({ editor, event }: Props) {
  event.preventDefault();
  const { selection } = editor;
  if (!selection) return;

  const [nodeEntry] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      n.type === "list-item",
  });

  if (!nodeEntry) return;

  const [node, path] = nodeEntry;
  const currentDepth = typeof node.depth === "number" ? node.depth : 0;

  if (currentDepth > 0) {
    Transforms.setNodes(
      editor,
      { depth: currentDepth - 1 },
      { at: path }
    );

    Transforms.unwrapNodes(editor, {
      at: path,
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === "numbered-list",
      split: true,
    });
  } else {
    // depth 0이면 paragraph로 변환
    Transforms.setNodes(
      editor,
      { type: "paragraph", depth: undefined },
      { at: path }
    );

    Transforms.unwrapNodes(editor, {
      at: path,
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n.type === "numbered-list",
      split: true,
    });
  }
}
