/// 통합상품코드
export type IntegreatedProduct = {
    id?:string;
    code : string;  // 통합상품코드
    name : string;  // 통함상품코드명
    children : ReprProduct[] // 단위상품이력코드
}

/// 대표상품코드
export type ReprProduct = {
    id? : string;
    code : string;
    name : string;
    children : UnitHistProduct[]
}

/// 단위상품이력
export type UnitHistProduct = {
    id? : string;
    code : string;
    name : string;
    revisionDate : string;
}