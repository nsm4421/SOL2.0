import { IntegreatedProduct } from "@/models/repr-product"

export type ProductRow = {
  integratedCode: string
  integratedName: string
  reprCode: string
  reprName: string
  unitCode: string
  unitName: string
  revisionDate: string
  showIntegrated: boolean
  showRepr: boolean
}

export function flattenProductData(data: IntegreatedProduct[]): ProductRow[] {
  const rows: ProductRow[] = []

  for (const integrated of data) {
    for (const repr of integrated.children) {
      for (const unit of repr.children) {
        rows.push({
          integratedCode: integrated.code,
          integratedName: integrated.name,
          reprCode: repr.code,
          reprName: repr.name,
          unitCode: unit.code,
          unitName: unit.name,
          revisionDate: unit.revisionDate,
          showIntegrated: true,
          showRepr: true,
        })
      }
    }
  }

  let lastIntegrated = ''
  let lastRepr = ''

  return rows.map((row) => {
    const showIntegrated = row.integratedCode !== lastIntegrated
    const showRepr = row.reprCode !== lastRepr
    lastIntegrated = row.integratedCode
    lastRepr = row.reprCode
    return { ...row, showIntegrated, showRepr }
  })
}
