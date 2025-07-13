import { CoverageCategory } from "@/models/repr-coverage";

type ReprCovRow = {
  cateory: CoverageCategory;
  reprCovCode: string;
  reprCovName: string;
  refernceDate: string;
}

export default ReprCovRow;