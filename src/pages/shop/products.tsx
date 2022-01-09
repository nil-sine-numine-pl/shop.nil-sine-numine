import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ProductCard from './productCard'
import styled from "@emotion/styled"
import { Price } from '../../product'
import { ShoppingCartUtilities, useShoppingCart } from 'use-shopping-cart'

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
        allStripePrice(filter: {product: {active: {eq: true}}, active: {eq: true}}) {
          nodes {
            id
            currency
            unit_amount
            product {
              id
              name
              description
              images
              metadata {
                shipment
              }
            }
          }
        }
      }`
  )
  const mapToProduct = (price: Price) => 
  {
    return {
      id: price.id,
      name: price.product.name,
      price: price.unit_amount,
      currency: price.currency,
      description: price.product.description,
      image: price.product.images,
      isShipment: price.product.metadata.shipment == 'true'
    }
  }
  const prices: Price[] = productsData.allStripePrice.nodes
                            .filter((price: Price) => !price.product.metadata.shipment)
  const shipment: Price = productsData.allStripePrice.nodes
                            .filter((price: Price) => price.product.metadata.shipment)[0]
  const cart = useShoppingCart()

  const addShipping = (cart: ShoppingCartUtilities, shipment: Price) => {
    cart.removeItem(shipment.id)
    cart.addItem(mapToProduct(shipment) as any)
  }
                          
  return (
    <>
      <Products>
        {prices.map(price => {
          const product = mapToProduct(price)
          return <ProductCard key={price.id}
                              product={product} 
                              onAdd={(product) => {cart.addItem(product); addShipping(cart, shipment)}}
                              />
        })}
      </Products>
    </>
  )
}