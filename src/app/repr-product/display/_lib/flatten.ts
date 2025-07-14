import { DisplayProductRow, FetchProductsResponse } from "@/types/repr-product";

export default function flattenProductData(
  data: FetchProductsResponse
): DisplayProductRow[] {
  const response: DisplayProductRow[] = [];

  for (const el of data) {
    let integratedProductVisibile = true;
    for (const unitHist of el.unitHistProducts) {
      response.push({
        integratedProductCode: el.integratedProduct.code,
        integratedProductName: el.integratedProduct.name,
        integratedProductRevisionDate: el.integratedProduct.revisionDate,
        integratedProductVisibile,
        unitHistProductCode: unitHist.code,
        unitHistProductName: unitHist.name,
        unitHistProductRevisionDate: unitHist.revisionDate,
      });
      if (integratedProductVisibile) {
        integratedProductVisibile = false;
      }
    }
  }
  return response;
}
