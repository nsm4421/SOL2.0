import { CustomElement } from "@/types/slate";
import { RenderElementProps } from "slate-react";

export default function renderCustomElement(props: RenderElementProps) {
  switch (props.element.type) {
    case "bulleted-list": {
      return (
        <ul className="list-disc list-inside" {...props.attributes}>
          {props.children}
        </ul>
      );
    }
    case "numbered-list": {
      const listItem = props.element.children?.find?.(
        (child: CustomElement) => child.type === "list-item"
      );
      const depth = typeof listItem?.depth === "number" ? listItem.depth : 0;
      const indentClass =
        depth === 0
          ? ""
          : depth === 1
          ? "pl-4"
          : depth === 2
          ? "pl-8"
          : "pl-12";
      return (
        <ol
          className={`list-decimal list-inside ${indentClass}`}
          {...props.attributes}
        >
          {props.children}
        </ol>
      );
    }
    case "list-item": {
      const depth = (props.element as any).depth ?? 0;
      const itemClass =
        depth === 0
          ? ""
          : depth === 1
          ? "pl-4"
          : depth === 2
          ? "pl-8"
          : "pl-12";
      return (
        <li className={itemClass} {...props.attributes}>
          {props.children}
        </li>
      );
    }
    default:
      return <p {...props.attributes}>{props.children}</p>;
  }
}
