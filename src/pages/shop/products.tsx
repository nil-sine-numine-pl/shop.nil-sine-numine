import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProductCard from './productCard'
import styled from "@emotion/styled"
import { Price } from '../../product'

const Products = styled.div({
  display: 'grid',
  marginTop: '1rem',
  gridGap: '1rem',
  '@media (orientation: portrait)': {gridTemplateColumns: '1'},
  '@media (orientation: landscape)': {gridTemplateColumns: 'repeat(2, 1fr)'},
})

export default () => {
  const productsData = useStaticQuery(
    graphql`
      query {
        allStripePrice(filter: {product: {active: {eq: true}, metadata: {shipment: {ne: "true"}}}, active: {eq: true}}) {
          nodes {
            id
            currency
            unit_amount
            product {
              id
              name
              description
              images
            }
          }
        }
      }`
  )
  const prices: Price[]  = productsData.allStripePrice.nodes
  return (
    <>
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