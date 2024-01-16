export interface RootProducts {
  id: number
  name: string
  slug: string
  payments: Payments
  gtin: any
  mpn: any
  additional_shipping_time: any
  external_id: any
  category_default_id: number
  hotsite_id: any
  description: any
  short_description: string
  relevance: number
  tags: string
  min_quantity: any
  max_quantity: any
  sell_in_kit_only: any
  meta_title: any
  meta_description: any
  meta_keywords: any
  kit: any
  kit_markup: number
  is_virtual: any
  is_pre_sale: any
  images: Image[]
  video: any
  weight: number
  depth: number
  width: number
  height: number
  is_gift: any
  selling_out_of_stock: any
  additional_time_out_of_stock: any
  price: number
  price_compare: number
  discount: number
  has_price_range: any
  min_price_range: number
  max_price_range: number
  billet_discount: any
  payments_reason: any
  brand: Brand
  category: any
  categories: any[]
  color: Color
  color_id: number
  attribute: any[]
  attribute_secondary: any[]
  features: any[]
  components: any[]
  component_groups: any[]
  colors: Color2[]
  url: string
  balance: number
  variations: any[]
  all_variations_in_release_date: boolean
  variation: Variation
  image: Image4
  grid_id: string
  release_date: any
  created_at: string
}

export interface Payments {
  paypal: Paypal
  creditcard: Creditcard
  app: App
  billet: Billet
  pix: Pix
}

export interface Paypal {
  name: string
  method: string
  discount: number
  parcels: number
  total: number
  parcel_price: number
  has_interest: boolean
  max_installment: MaxInstallment
}

export interface MaxInstallment {
  markup: string
  parcel: number
  discount: number
  interest: number
  total: number
  parcel_price: number
}

export interface Creditcard {
  name: string
  method: string
  discount: number
  parcels: number
  total: number
  parcel_price: number
  has_interest: boolean
  max_installment: MaxInstallment2
}

export interface MaxInstallment2 {
  markup: string
  parcel: number
  discount: number
  interest: number
  total: number
  parcel_price: number
}

export interface App {
  name: string
  method: string
  discount: number
  parcels: number
  total: number
  parcel_price: number
  has_interest: boolean
  max_installment: MaxInstallment3
}

export interface MaxInstallment3 {
  markup: string
  parcel: number
  discount: number
  interest: number
  total: number
  parcel_price: number
}

export interface Billet {
  name: string
  method: string
  discount: number
  parcels: number
  total: number
  parcel_price: number
  has_interest: boolean
  max_installment: MaxInstallment4
}

export interface MaxInstallment4 {
  markup: string
  parcel: number
  discount: number
  interest: number
  total: number
  parcel_price: number
}

export interface Pix {
  name: string
  method: string
  discount: number
  parcels: number
  total: number
  parcel_price: number
  has_interest: boolean
  max_installment: MaxInstallment5
}

export interface MaxInstallment5 {
  markup: string
  parcel: number
  discount: number
  interest: number
  total: number
  parcel_price: number
}

export interface Image {
  id: any
  src: string
  alt: any
  position: any
}

export interface Brand {
  id: number
  url: string
  name: string
  slug: string
  position: any
  description: any
  hotsite_id: any
  active: any
  short_description: any
  image: any
  banner: any
  meta_title: any
  meta_description: any
  meta_keywords: any
  created_at: any
}

export interface Color {
  id: number
  name: string
  slug: string
  image: any
  hexadecimal: string
  position: any
  url: any
  product_images: any
}

export interface Color2 {
  id: number
  name: string
  slug: string
  image: any
  hexadecimal: string
  position: any
  url: string
  product_images: any
}

export interface Variation {
  id: number
  name: string
  slug: string
  gtin: any
  product_id: number
  color_id: number
  grid_id: string
  color_secondary_id: any
  attribute_value_id: number
  attribute_value_secondary_id: any
  mpn: any
  additional_shipping_time: any
  external_id: any
  min_quantity: any
  max_quantity: any
  reference: any
  is_sell_in_kit_only: any
  meta_title: any
  meta_description: any
  meta_keywords: any
  images: Image2[]
  image: Image3
  video: any
  additional_time_out_of_stock: any
  balance: number
  price: string
  has_price_range: any
  min_price_range: number
  max_price_range: number
  price_compare: any
  color: Color3
  attribute: Attribute
  attribute_secondary: any
  url: string
  selling_out_of_stock: boolean
  release_date: any
}

export interface Image2 {
  id: any
  src: string
  alt: any
  position: any
}

export interface Image3 {
  id: any
  src: string
  alt: any
  position: any
}

export interface Color3 {
  id: number
  name: string
  slug: string
  image: any
  hexadecimal: string
  position: any
  url: any
  product_images: any
}

export interface Attribute {
  id: number
  name: string
  slug: string
  attribute_id: any
  attribute_name: any
  position: any
  active: any
}

export interface Image4 {
  id: any
  src: string
  alt: any
  position: any
}

export interface CartItem{
    id: number;
    name: string;
    quantity: number;
    size: string;
    color: string;
    price: number;
    image: string;
}