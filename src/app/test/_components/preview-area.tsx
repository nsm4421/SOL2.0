"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EditorContainer } from "@/components/ui/editor";
import { EditorStatic } from "@/components/ui/editor-static";
import { Label } from "@/components/ui/label";
import { RefreshCcw } from "lucide-react";
import { Value } from "platejs";
import { PlateEditor } from "platejs/react";
import { useState } from "react";

interface Props {
  editor: PlateEditor;
}

export default function PreviewArea({ editor }: Props) {
  const [value, setValue] = useState<Value | undefined>(undefined);

  const handleRefresh = () => {
    setValue(editor.children);
  };

  return (
    <div>
      <div className="flex gap-x-2 items-center mb-3">
        <Label>미리보기</Label>
        <Button
          variant="ghost"
          onClick={handleRefresh}
          className="cursor-pointer hover:text-sky-700"
        >
          <RefreshCcw />
        </Button>
      </div>
      <Card className="w-full p-2 mb-3">
        <h1>TODO : 미리보기 조건 넣기</h1>
      </Card>

      <EditorContainer>
        <EditorStatic value={value} editor={editor} />
      </EditorContainer>
    </div>
  );
}
