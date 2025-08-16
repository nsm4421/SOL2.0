import { Card } from "@/components/ui/card";

export default function TermToc() {
  return (
    <Card className="flex flex-col p-2">
      <ul className="flex flex-col gap-y-2 list-none text-sm">
        <li>제1조 보험금의 지급사유</li>
        <li>제2조 보험금 지급에 관한 세부규정</li>
        <li>제3조 수술의 정의</li>
        <li>제4조 준용규정</li>
      </ul>
    </Card>
  );
}
