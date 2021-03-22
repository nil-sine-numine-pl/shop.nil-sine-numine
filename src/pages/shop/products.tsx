import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProductCard from './productCard'
import CSS from 'csstype'

interface Product {
  id: string
  name: string
  description: string
  images: string[]
}

interface Metadata {
  quantity: string
}

interface Price {
  id: string
  currency: string
  unit_amount: number
  metadata: Metadata
  product: Product
}

const conatinerStyles: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

export default () => {
  const prices: Price[] = useStaticQuery(
    graphql`
      query {
        allStripePrice {
          nodes {
            id
            currency
            unit_amount
            metadata {
              quantity
            }
            product {
              id
              name
              description
              images
            }
          }
        }
      }`
  ).allStripePrice.nodes

  return (
    <div style={conatinerStyles}>
      {prices.map(price => {
        const product = {
          id: price.id,
          name: price.product.name,
          price: price.unit_amount,
          currency: price.currency,
          image: price.product.images,
        }
        return <ProductCard key={price.id} product={product} />
      })}
    </div>
  )
}