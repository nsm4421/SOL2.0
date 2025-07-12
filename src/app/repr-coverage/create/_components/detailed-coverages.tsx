"use client";

import { useCreateReprCov } from "@/hooks/use-create-repr-cov";
import DetailedCoverageItem from "./detailed-coverage-item";

export default function DetailedCoverages() {
  const { repr } = useCreateReprCov();

  return (
    <section>
      <ul className="flex flex-col gap-y-3">


        {repr.children &&
          repr.children.map((detCov, idx) => (
            <li key={idx}>
              <DetailedCoverageItem idx = {idx} detCov={detCov} />
            </li>
          ))}


      </ul>
    </section>
  );
}
