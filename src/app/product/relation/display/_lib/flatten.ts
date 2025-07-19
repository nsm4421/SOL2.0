import {
  DisplayProductRelationRow,
  FetchProductRelationResponse,
} from "@/types/repr-product";

export default function flattenProductRelationData(
  data: FetchProductRelationResponse
): DisplayProductRelationRow[] {
  const response: DisplayProductRelationRow[] = [];

  for (const el of data) {
    let mainProductVisibile = true;
    for (const indp of el.indpCtrProducts) {
      response.push({
        mainProductCode: el.mainCtrProudct.code,
        mainProductName: el.mainCtrProudct.name,
        mainProductRevisionDate: el.mainCtrProudct.revisionDate,
        mainProductVisibile,
        indpProductCode: indp.code,
        indpProductName: indp.name,
        indpProductRevisionDate: indp.revisionDate,
      });
      if (mainProductVisibile) {
        mainProductVisibile = false;
      }
    }
  }
  return response;
}
