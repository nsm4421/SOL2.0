"use client";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { FixedToolbar } from "@/components/ui/fixed-toolbar";
import { ListToolbarButton } from "@/components/ui/list-classic-toolbar-button";
import { MarkToolbarButton } from "@/components/ui/mark-toolbar-button";
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from "@platejs/list-classic/react";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";

export default function EditingArea() {
  return (
    <>
      <FixedToolbar className="justify-start rounded-t-lg flex">
        <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)">
          <Bold />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)">
          <Italic />
        </MarkToolbarButton>
        <MarkToolbarButton nodeType="underline" tooltip="Underline (⌘+U)">
          <Underline />
        </MarkToolbarButton>
        <MarkToolbarButton
          nodeType="strikethrough"
          tooltip="Strikethrough (⌘+Shift+X)"
        >
          <Strikethrough />
        </MarkToolbarButton>
        <MarkToolbarButton
          nodeType="code"
          tooltip="Code (⌘+E)"
        >{`</>`}</MarkToolbarButton>
        <ListToolbarButton nodeType={BulletedListPlugin.key} />
        <ListToolbarButton nodeType={NumberedListPlugin.key} />
      </FixedToolbar>
      <EditorContainer>
        <Editor
          placeholder="해당 조항의 내용을 입력하세요"
          className="bg-slate-50"
        />
      </EditorContainer>
    </>
  );
}
