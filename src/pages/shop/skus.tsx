import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './skuCard'
import CSS from 'csstype'

const conatinerStyles: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true } }
        ) {
          edges {
            node {
              id
              active
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
        }
      }
    `}
    render={({ prices }) => (
      <div style={conatinerStyles}>
        {prices.edges.map(({ node: price }) => {
          const newSku = {
            sku: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
            image: price.product.images,
          }
          return <SkuCard key={price.id} sku={newSku} />
        })}
      </div>
    )}
  />
)