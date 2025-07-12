import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

export type ParagraphElement = {
  type: "paragraph";
  children: CustomText[];
};

export type ListItemElement = {
  type: "list-item";
  children: CustomText[];
  depth?: number;
};

export type BulletedListElement = {
  type: "bulleted-list";
  children: ListItemElement[];
};

export type NumberedListElement = {
  type: "numbered-list";
  children: ListItemElement[];
};

export type CustomElement =
  | aragraphElement
  | ListItemElement
  | BulletedListElement
  | NumberedListElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
