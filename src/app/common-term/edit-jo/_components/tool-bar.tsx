import { Bold, Italic, List, ListOrdered, Underline } from "lucide-react";
import { CustomText } from "@/types/slate";
import { ReactNode } from "react";
import { useSlate } from "slate-react";
import { Button } from "@/components/ui/button";
import toggleFormat from "../_lib/toggle-format";
import { Editor, Element as SlateElement } from "slate";
import toggleBlock from "../_lib/toggle-block";

export default function Toolbar() {
  return (
    <div className="flex gap-2 mb-2">
      <MarkButton format="bold" icon={<Bold size={16} />} />
      <MarkButton format="italic" icon={<Italic size={16} />} />
      <MarkButton format="underline" icon={<Underline size={16} />} />
      <BlockButton format="bulleted-list" icon={<List size={16} />} />
      <BlockButton format="numbered-list" icon={<ListOrdered size={16} />} />
    </div>
  );
}

function MarkButton({
  format,
  icon,
}: {
  format: keyof Omit<CustomText, "text">;
  icon: ReactNode;
}) {
  const editor = useSlate();
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
    >
      {icon}
    </Button>
  );
}

function BlockButton({
  format,
  icon,
}: {
  format: "bulleted-list" | "numbered-list";
  icon: ReactNode;
}) {
  const editor = useSlate();
  const [match] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  const isActive = !!match;

  return (
    <Button
      type="button"
      variant={isActive ? "default" : "ghost"}
      size="icon"
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </Button>
  );
}
