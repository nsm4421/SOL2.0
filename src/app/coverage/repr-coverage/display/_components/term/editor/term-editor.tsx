"use client";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { BulletedListElement } from "@/components/ui/list-classic-node";
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from "@platejs/list-classic/react";
import { Plate, usePlateEditor } from "platejs/react";
import {
  BlockquotePlugin,
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
} from "@platejs/basic-nodes/react";
import { LinkPlugin } from "@platejs/link/react";
import { LinkFloatingToolbar } from "@/components/ui/link-toolbar";
import { LinkElement } from "@/components/ui/link-node";
import { BlockquoteElement } from "@/components/ui/blockquote-node";
import { Value } from "platejs";

export default function TermEditor() {
  const editorId = "term-editor";

  const initialValue: Value = [
    { id: "p-1", type: "p", children: [{ text: "" }] },
  ];

  const editor = usePlateEditor({
    id: editorId,
    value: initialValue,
    plugins: [
      BoldPlugin,
      ItalicPlugin,
      UnderlinePlugin,
      BlockquotePlugin.withComponent(BlockquoteElement),
    ],
  });
  return (
    <Plate editor={editor}>
      <div className="flex flex-col min-h-0 h-full overflow-y-auto">
        <div className="p-2">
          <EditorContainer className="p-0 m-0">
            <Editor
              placeholder="약관을 입력하세요"
              className="m-0 !px-2 !pb-2 bg-slate-100 rounded-sm"
            />
          </EditorContainer>
        </div>
      </div>
    </Plate>
  );
}
