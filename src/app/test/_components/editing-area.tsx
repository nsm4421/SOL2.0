"use client";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { FixedToolbar } from "@/components/ui/fixed-toolbar";
import { ListToolbarButton } from "@/components/ui/list-classic-toolbar-button";
import { MarkToolbarButton } from "@/components/ui/mark-toolbar-button";
import { useCustomMentions } from "@/hooks/use-custom-mention-state";
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from "@platejs/list-classic/react";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import { PlateEditor } from "platejs/react";
import { useCallback } from "react";

interface Props {
  editor: PlateEditor;
}

export default function EditingArea({ editor }: Props) {
  const { mentions } = useCustomMentions();

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!mentions && e.key === "@") {
        e.preventDefault();
        (editor as any).insertText?.("@");
      }
    },
    [mentions, editor]
  );

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
        <ListToolbarButton nodeType={BulletedListPlugin.key} />
        <ListToolbarButton nodeType={NumberedListPlugin.key} />
      </FixedToolbar>
      <EditorContainer className="!overflow-y-auto">
        <Editor
          onKeyDown={onKeyDown}
          placeholder="해당 조항의 내용을 입력하세요"
          className="bg-slate-50 px-4 sm:px-6 lg:px-8 !pb-2"
        />
      </EditorContainer>
    </>
  );
}
