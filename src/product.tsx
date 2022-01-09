type Product = {
  id: string
  name: string
  description: string
  images: string[]
  metadata: {
    shipment: string
  }
}

export type Price = {
  id: string
  currency: string
  unit_amount: number
  metadata: {
    quantity: string
  }
  product: Product
}
