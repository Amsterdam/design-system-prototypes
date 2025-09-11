export interface ITommyAvailabilityResult {
  success: boolean
  data: Daum[]
}

export interface Daum {
  period: Period
  accommodations: Accommodation[]
}

export interface Period {
  start: string
  end: string
}

export interface Accommodation {
  accommodation: number
  price: Price
}

export interface Price {
  arrangement: Arrangement
  costsOfStay: CostsOfStay
  items: Items
  discounts: Discounts
  total: Total5
  originalPrice: number
}

export interface Arrangement {
  total: Total
  calculation: any[]
}

export interface Total {
  vat: number
  incl: number
  excl: number
}

export interface CostsOfStay {
  total: Total2
}

export interface Total2 {
  vat: number
  incl: number
  excl: number
}

export interface Items {
  total: Total3
  calculation: Calculation
}

export interface Total3 {
  vat: number
  incl: number
  excl: number
}

export interface Calculation {
  '156827': N156827
}

export interface N156827 {
  count: number
  name: string
  group: string
  group_name: string
  deposit: boolean
  price: Price2
}

export interface Price2 {
  vat: number
  incl: number
  excl: number
}

export interface Discounts {
  total: Total4
  calculation: any[]
}

export interface Total4 {
  vat: number
  incl: number
  excl: number
}

export interface Total5 {
  deposit: number
  vat: number
  incl: number
  excl: number
}
