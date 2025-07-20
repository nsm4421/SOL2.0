"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useUnitHistModel } from "@/hooks/use-unit-hist-model";
import {
  OtherSpecialRiders,
  ProductTermCategories,
  RenewTypes,
  SimpleInsuranceType,
  SimpleInsuranceTypes,
} from "@/models/unit-hist-product";
import { ArrowLeftRight, CirclePlus, CornerDownRight } from "lucide-react";

export default function CommonTermDiv() {
  const {
    getIsGroup,
    getIsFetus,
    getOtherSpecialRiders,
    getSimpleInsuranceType,
    setCategory,
    setIsGroup,
    setIsFetus,
    setOtherSpecialRiders,
    setRenewType,
    setSimpleInsuranceType,
  } = useUnitHistModel();

  const handleCategory = (v: string) => () => {
    setCategory(v);
  };

  const handleIsGroup = (v: boolean) => {
    setIsGroup(v);
  };

  const hansdleIsFetus = (v: boolean) => {
    setIsFetus(v);
  };

  const handleOtherSpecialRider = (v: string) => (checked: boolean) => {
    setOtherSpecialRiders(
      checked
        ? [...getOtherSpecialRiders(), v]
        : [...getOtherSpecialRiders()].filter((e) => e !== v)
    );
  };
  const handleRenewType = (v: string) => () => {
    setRenewType(v);
  };

  const handleSimpleInsuranceType = (v: SimpleInsuranceType) => () => {
    setSimpleInsuranceType(v);
  };

  return (
    <ul className="flex gap-x-3">
      <li className="flex flex-col">
        <Badge
          variant="secondary"
          className="bg-white text-muted-foreground text-md min-w-[120px] justify-start"
        >
          표준안유형
        </Badge>
        <Card className="px-4 py-3">
          <RadioGroup
            defaultValue={ProductTermCategories[0]}
            defaultChecked
            className="flex flex-col gap-x-6 items-start min-w-max"
          >
            {ProductTermCategories.map((v, idx) => (
              <div
                key={v}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <RadioGroupItem
                  value={v}
                  id={v}
                  className="cursor-pointer"
                  onClick={handleCategory(v)}
                />
                <label htmlFor={v} className="text-sm">
                  {`${idx + 1}. ${v}`}
                </label>
              </div>
            ))}
          </RadioGroup>
        </Card>
      </li>

      <li className="flex flex-col">
        <Badge
          variant="secondary"
          className="bg-white text-muted-foreground text-md min-w-[120px] justify-start"
        >
          단체계약 여부
        </Badge>
        <Card className="px-4 py-3">
          <div className="flex items-center gap-x-3 min-w-max">
            <Switch defaultChecked={false} onCheckedChange={handleIsGroup} />
            <Label>{getIsGroup() ? "단체계약" : "일반계약"}</Label>
          </div>
        </Card>
      </li>

      <li className="flex flex-col">
        <Badge
          variant="secondary"
          className="bg-white text-muted-foreground text-md min-w-[120px] justify-start"
        >
          태야계약 여부
        </Badge>
        <Card className="px-4 py-3">
          <div className="flex items-center gap-x-3">
            <Switch defaultChecked={false} onCheckedChange={hansdleIsFetus} />
            <Label>{getIsFetus() ? "태야계약" : "일반계약"}</Label>
          </div>
        </Card>
      </li>

      <li className="flex flex-col">
        <Badge
          variant="secondary"
          className="bg-white text-muted-foreground text-md min-w-[120px] justify-start"
        >
          기타특별약관
        </Badge>
        <Card className="px-4 py-3 min-w-max">
          {OtherSpecialRiders.map((v, idx) => (
            <div key={idx} className="flex items-center gap-x-3">
              <Checkbox onCheckedChange={handleOtherSpecialRider(v)} />
              <Label>{v}</Label>
            </div>
          ))}
        </Card>
      </li>

      <li className="flex flex-col">
        <Badge
          variant="secondary"
          className="bg-white text-muted-foreground text-md min-w-[120px] justify-start"
        >
          갱신형/비갱신형 유형
        </Badge>
        <Card className="px-4 py-3">
          <RadioGroup
            defaultValue={RenewTypes[0]}
            defaultChecked
            className="flex flex-col gap-x-6 items-start"
          >
            {RenewTypes.map((v, idx) => (
              <div
                key={v}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <RadioGroupItem
                  value={v}
                  id={v}
                  className="cursor-pointer"
                  onClick={handleRenewType(v)}
                />
                <label htmlFor={v} className="text-sm">
                  {`${idx + 1}. ${v}`}
                </label>
              </div>
            ))}
          </RadioGroup>
        </Card>
      </li>

      <li className="flex flex-col items-start">
        <Badge
          variant="secondary"
          className="bg-white text-muted-foreground text-md min-w-[120px] justify-start"
        >
          간편심사 유형
        </Badge>
        <Card className="px-4 py-3">
          <RadioGroup
            defaultValue={SimpleInsuranceTypes[0].type}
            defaultChecked
            className="flex flex-col gap-x-6"
          >
            {SimpleInsuranceTypes.map((v, idx) => {
              const isSelected = getSimpleInsuranceType().type === v.type;
              return (
                <div key={v.type} className="flex flex-col">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <RadioGroupItem
                      value={v.type}
                      className="cursor-pointer"
                      onClick={handleSimpleInsuranceType(v)}
                    />
                    <label className="text-sm">{`${idx + 1}. ${v.type}`}</label>
                    {v.type === "통합간편심사형" && (
                      <CirclePlus className="size-4" />
                    )}
                  </div>
                  {isSelected && (
                    <div className="flex my-1 gap-x-3 items-start px-2">
                      <CornerDownRight className="size-4 text-slate-500" />
                      <div className="flex flex-col">
                        {v.categories.map((c, idx) => (
                          <Label
                            key={c}
                            className="text-muted-foreground text-sm"
                          >
                            {c}
                          </Label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </RadioGroup>
        </Card>
      </li>
    </ul>
  );
}
