import type { PlateElementProps } from "platejs/react";

export default function CustomOrderedList({
  attributes,
  children,
}: PlateElementProps) {
  return (
    <ol {...attributes} className="my-2 list-none pl-0 ml-0">
      {children}
    </ol>
  );
}
