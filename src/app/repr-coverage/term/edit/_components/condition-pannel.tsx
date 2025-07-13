import { Card } from "@/components/ui/card";

export default function ConditionPannel() {
  return (
    <>
      <h2 className="font-bold">Condition</h2>

      <Card className="p-2">
        <h3 className="font-bold my-1">Case</h3>
        <ul className="flex flex-col gap-y-2 list-disc px-2">
          <li>갱신형여부</li>
        </ul>
      </Card>
    </>
  );
}
