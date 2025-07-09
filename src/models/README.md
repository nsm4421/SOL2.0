# 대표상품코드

## 계층구조

당사 상품코드 구조의 경우 `대표상품코드 > 단위상품코드 > 단위상품코드 > 버전` 형태의 계층 구조가 존재

이에 SOL2.0에서는 상품을 `통합상품 > 대표상품 > 단위상품이력 > 개정일자` 별로 계층화 시키고자 함

통합간편건강보험 상품에 대해 2025-07-07일자 기준으로 스냅샷을 찍는다면 아래와 같은 계층구조가 존재

- [통합상품] 무배당 메리츠 통합간편건강보험
    - [대표상품] 무배당 메리츠 통합간편건강보험(통합간편심사형)
        - [단위상품이력] 무배당 메리츠 통합간편건강보험(통합간편심사형)2504
            - [개정일자] 2024-04-01
            - [개정일자] 2024-07-07
    - [대표상품] 무배당 메리츠 통합간편건강보험(355입원,수술고지형)
        - [단위상품이력] 무배당 메리츠 통합간편건강보험(355입원,수술고지형)2504
    - [대표상품] 무배당 메리츠 통합간편건강보험(일반심사형)
        - [단위상품이력] 무배당 메리츠 통합간편건강보험(일반심사형)2504

...

## Table

```
-- 통합상품 테이블
CREATE TABLE INTEGRATED_PRODUCTS (
    ID UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
    CODE TEXT,
    NAME TEXT NOT NULL,
    CREATED_AT TIMESTAMPTZ DEFAULT NOW()
);

-- 대표상품 테이블 (REPR_PRODUCTS)
CREATE TABLE REPR_PRODUCTS (
    ID UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
    INTEGRATED_PRODUCT_ID UUID REFERENCES INTEGRATED_PRODUCTS(ID) ON DELETE CASCADE,
    CODE TEXT,
    NAME TEXT,
    CREATED_AT TIMESTAMPTZ DEFAULT NOW()
);

-- 단위상품이력 테이블 (UNIT_HIST_PRODUCTS)
    CREATE TABLE UNIT_HIST_PRODUCTS (
    ID UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
    REPR_PRODUCT_ID UUID REFERENCES REPR_PRODUCTS(ID) ON DELETE CASCADE,
    CODE TEXT,
    NAME TEXT,
    REVISION_DATE NOT NULL,   -- 개정일자
    CREATED_AT TIMESTAMPTZ DEFAULT NOW()
);
```