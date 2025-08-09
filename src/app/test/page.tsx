"use client";

import { Plate, usePlateEditor } from "platejs/react";
import {
  BulletedListPlugin,
  ListItemPlugin,
  ListPlugin,
  NumberedListPlugin,
  TaskListPlugin,
} from "@platejs/list-classic/react";
import {
  BulletedListElement,
  NumberedListElement,
  TaskListElement,
} from "@/components/ui/list-classic-node";
import { BasicMarksKit } from "@/components/editor/plugins/basic-marks-kit";
import EditingArea from "./_components/editing-area";
import AppNavbar from "@/components/navbar";
import PreviewArea from "./_components/preview-area";

export default function TermEditorPage() {
  const initialValue = [{ id: "p-1", type: "p", children: [{ text: "" }] }];

  const editor = usePlateEditor({
    override: {
      enabled: {
        indent: false,
        list: false,
      },
    },
    value: initialValue,
    plugins: [
      ...BasicMarksKit,
      ListPlugin,
      BulletedListPlugin.configure({
        node: { component: BulletedListElement },
        shortcuts: { toggle: { keys: "mod+alt+5" } },
      }),
      NumberedListPlugin.configure({
        node: { component: NumberedListElement },
        shortcuts: { toggle: { keys: "mod+alt+6" } },
      }),
      TaskListPlugin.configure({
        node: { component: TaskListElement },
        shortcuts: { toggle: { keys: "mod+alt+7" } },
      }),
      ListItemPlugin,
    ],
  });

  return (
    <div className="h-screen w-screen">
      <AppNavbar label={"약관 작성 Editor 예시"} />
      <main>
        <Plate editor={editor}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-3">
            <section className="min-w-1/2 overflow-y-auto">
              <EditingArea />
            </section>
            <section>
              <PreviewArea editor={editor} />
            </section>
          </div>
        </Plate>
      </main>
    </div>
  );
}
