export type FetchProductsResponse = {
  /// 통합상품
  integratedProduct: {
    code: string;
    name: string;
    revisionDate: string;
  };
  // 단위상품이력코드 목록
  unitHistProducts: {
    code: string;
    name: string;
    revisionDate: string;
  }[];
}[];

export type DisplayProductRow = {
  integratedProductCode: string;
  integratedProductName: string;
  integratedProductRevisionDate: string;
  integratedProductVisibile: boolean;
  unitHistProductCode: string;
  unitHistProductName: string;
  unitHistProductRevisionDate: string;
};
