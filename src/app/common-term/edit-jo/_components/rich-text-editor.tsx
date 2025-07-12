"use client";

import React, { useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./tool-bar";
import keyboardHandler from "../_lib/keyboard-handler";
import renderCustomElement from "../_lib/render-element";
import renderCustomLeaf from "../_lib/render-leaf";

export default function RichTextEditor() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const initialValue: Descendant[] = useMemo(() => {
    return [
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ];
  }, []);
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const handleChange = (v: Descendant[]) => {
    setValue(v);
  };

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <section className="flex flex-col gap-y-2 mb-4">
        <h1 className="font-bold text-xl">O조(~~~~~)</h1>
        <div className="min-h-[30vh] max-h-[50vh] overflow-y-auto">
          <Toolbar />
          <Editable
            renderElement={renderCustomElement}
            renderLeaf={renderCustomLeaf}
            onKeyDown={(event) => keyboardHandler({ editor, event })}
            className="border border-muted p-3 rounded-md focus:outline-none"
          />
        </div>
      </section>
      <section className="flex flex-col gap-y-3">
        <h3 className="font-semibold mt-4">현재 JSON:</h3>
        <div className="max-h-[30vh] mt-2 overflow-auto">
          <pre className="p-2 bg-muted rounded text-xs overflow-y-auto">
            {JSON.stringify(value, null, 2)}
          </pre>
        </div>
      </section>
    </Slate>
  );
}
