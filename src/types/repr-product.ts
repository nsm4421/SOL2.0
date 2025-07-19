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

export type FetchProductRelationResponse = {
  // 주계약
  mainCtrProudct: {
    code: string;
    name: string;
    revisionDate: string;
  };
  // 독립특약
  indpCtrProducts: {
    code: string;
    name: string;
    revisionDate: string;
  }[];
}[];

export type DisplayProductRelationRow = {
  mainProductCode: string;
  mainProductName: string;
  mainProductRevisionDate: string;
  mainProductVisibile: boolean;
  indpProductCode: string;
  indpProductName: string;
  indpProductRevisionDate: string;
};
