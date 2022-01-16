import React from "react"
import getStripe from '../../get-stripe'
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import Products from "./products"
import { Page } from "../../components/page"
import { graphql, useStaticQuery } from 'gatsby'
import { Lined, H1 } from '../../components/lined'

export default () => {
  const isBrowser = () => typeof window !== "undefined"

  const shopInfo = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {id: {}, frontmatter: {id: {eq: "info-products"}}}) {
          nodes {
            html
          }
        }
      }`
  ).allMarkdownRemark.nodes[0].html

  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency="PLN">
      <Page>
        <Lined><H1>Kawa i rękodzieła</H1></Lined>
        <div dangerouslySetInnerHTML={{ __html: shopInfo }}/>
        <Cart />
        <Products />
      </Page>
    </CartProvider>
  )
}
