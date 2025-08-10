"use client";

import { Plate, usePlateEditor } from "platejs/react";
import {
  BulletedListPlugin,
  ListItemPlugin,
  ListPlugin,
  NumberedListPlugin,
} from "@platejs/list-classic/react";
import { BulletedListElement } from "@/components/ui/list-classic-node";
import { BasicMarksKit } from "@/components/editor/plugins/basic-marks-kit";
import EditingArea from "./_components/editing-area";
import AppNavbar from "@/components/navbar";
import PreviewArea from "./_components/preview-area";
import CustomOrderedList from "@/components/editor/custom/custom-ordered-list";
import CustomListItem from "@/components/editor/custom/custom-list-item";
import { MentionInputPlugin, MentionPlugin } from "@platejs/mention/react";
import { Separator } from "@/components/ui/separator";
import {
  CustomMentionElement,
  CustomMentionInputElement,
} from "@/components/editor/custom/custom-mention-element";
import ConditionPannel from "./_components/condition-pannel";

export default function TermEditorPage() {
  const editor = usePlateEditor(
    {
      override: {
        enabled: {
          indent: false,
          list: false,
        },
      },
      value: [{ id: "p-1", type: "p", children: [{ text: "" }] }], // init value
      plugins: [
        ...BasicMarksKit, // 기본 plugin
        // List Plugin : nested list처리
        ListPlugin,
        BulletedListPlugin.configure({
          node: { component: BulletedListElement },
          shortcuts: { toggle: { keys: "mod+alt+5" } },
        }),
        NumberedListPlugin.configure({
          node: { component: CustomOrderedList },
          shortcuts: { toggle: { keys: "mod+alt+6" } },
        }),
        ListItemPlugin.configure({ node: { component: CustomListItem } }),

        // Mention Plugin : 조건식 처리
        MentionPlugin.configure({
          node: { component: CustomMentionElement },
          options: { insertSpaceAfterMention: false },
        }),
        MentionInputPlugin.withComponent(CustomMentionInputElement),
      ],
    },
    []
  );

  return (
    <div className="h-screen w-screen">
      <AppNavbar label={"약관 작성 Editor 예시"} />

      <Plate editor={editor}>
        <main className="grid grid-rows-[1fr_20vh]">
          <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] mb-10 fles gap-x-2">
            <div className="px-2">
              <EditingArea editor={editor} />
            </div>
            <div className="px-2">
              <PreviewArea editor={editor} />
            </div>
          </section>

          <section className="p-2 flex flex-col gap-y-2">
            <Separator className="my-2" />
            <ConditionPannel editor={editor} />
          </section>
        </main>
      </Plate>
    </div>
  );
}
