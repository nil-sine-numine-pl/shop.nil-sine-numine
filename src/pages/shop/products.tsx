import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProductCard from './productCard'
import styled from "@emotion/styled"

const Products = styled.div({
  display: 'grid',
  gridGap: '1rem',
  '@media (orientation: portrait)': {gridTemplateColumns: '1'},
  '@media (orientation: landscape)': {gridTemplateColumns: 'repeat(2, 1fr)'},
})

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

export default () => {
  const productsData = useStaticQuery(
    graphql`
      query {
        allStripePrice(filter: {active: {eq: true}}) {
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
        },
        allMarkdownRemark(filter: {id: {}, frontmatter: {id: {eq: "info-products"}}}) {
          nodes {
            html
          }
        }
      }`
  )
  const prices: Price[]  = productsData.allStripePrice.nodes
  const description = productsData.allMarkdownRemark.nodes[0].html
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: description }}/>
      <Products>
        {prices.map(price => {
          const product = {
            id: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
            description: price.product.description,
            image: price.product.images,
          }
          return <ProductCard key={price.id} product={product} />
        })}
      </Products>
    </>
  )
}