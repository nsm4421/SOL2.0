"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import { Card } from "./ui/card";

interface Props {
  title: string;
  markdownPath: string; // public 폴더기준 markdown폴더 경로
  trigger: ReactNode;
}

export default function MarkdownModal({ title, markdownPath, trigger }: Props) {
  const [isError, setIsError] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(markdownPath)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((error) => {
        setIsError(true);
        console.error(error);
      });
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {!isError && (
        <DialogContent className="max-w-2xl">
          <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
          <Card className="prose prose-sm max-h-[60vh] overflow-auto p-3">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Card>
        </DialogContent>
      )}
    </Dialog>
  );
}
