import { CustomText } from "@/types/slate";
import { Editor } from "slate";

export default function toggleFormat(
  editor: Editor,
  format: keyof Omit<CustomText, "text">
) {
  const marks = Editor.marks(editor);
  const isActive = marks ? marks[format] === true : false;
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
}
