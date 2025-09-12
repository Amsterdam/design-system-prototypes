export interface TommyEndpointResponse {
  success: boolean
  data: Daum[]
}

export interface Daum {
  name: string
  id: number
  token: string
  metadata: Metadata
}

export interface Metadata {
  languages: Language[]
  settings: Settings
  accommodationGroups: AccommodationGroup[]
  personCategories: PersonCategory[]
  properties: any[]
  accommodations: Accommodation[]
  items: Item[]
}

export interface Language {
  code: string
  name: string
  default: boolean
}

export interface Settings {
  currencyDefault: string
  registerAllGuests: boolean
  allowGuestRemarks: boolean
  guestFields: GuestField[]
  customFields: any[]
  map: Map
}

export interface GuestField {
  mandatory: boolean
  type: string
  order: number
}

export interface Map {
  image: string
  width: number
  height: number
}

export interface AccommodationGroup {
  id: number
  order: number
  label: string
  name: Name
}

export interface Name {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}

export interface PersonCategory {
  id: number
  order: number
  label: string
  name: Name2
  from: number
  until: number
  members: boolean
  default: number
}

export interface Name2 {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}

export interface Accommodation {
  id: number
  minimumPersons: number
  maximumPersons: number
  minimumDays: number
  maximumDays: number
  perDay: boolean
  arrivalTime: ArrivalTime
  departureTime: DepartureTime
  url: Url
  name: Name3
  description: Description
  accommodationGroup: number
  images: Image[]
}

export interface ArrivalTime {
  date: string
  timezone_type: number
  timezone: string
}

export interface DepartureTime {
  date: string
  timezone_type: number
  timezone: string
}

export interface Url {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}

export interface Name3 {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}

export interface Description {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}

export interface Image {
  image: string
  thumb: string
  original: string
}

export interface Item {
  id: number
  mandatory: boolean
  name: Name4
  description: Description2
}

export interface Name4 {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}

export interface Description2 {
  nl: string
  gb: string
  fr: string
  de: string
  se: string
  es: string
  it: string
  no: string
  pt: string
}
