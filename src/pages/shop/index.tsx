import React from "react"
import { useStaticQuery, PageProps, graphql } from "gatsby"
import Layout from "../../components/layout"
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import { loadStripe } from '@stripe/stripe-js'
import Skus from "./skus"

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

console.log(process.env.STRIPE_PUBLISHABLE_KEY)

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export default function IndexRoute(props: PageProps) {
  const pricedProducts: Price[] = useStaticQuery(
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
    <Layout>
      <h1>Tu będzie sklep :)</h1>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${window.location.origin}/page-2/`}
        cancelUrl={`${window.location.origin}/`}
        currency="PLN"
        allowedCountries={['PL']}
        billingAddressCollection={true}
      >
        <div>
          <Cart />
          <Skus />
        </div>
      </CartProvider>


      <ul>
        {pricedProducts.map(pricedProduct =>
          <li>
            {pricedProduct.product.name} | Zostało: {pricedProduct.metadata.quantity ?? '∞'} | {pricedProduct.unit_amount / 100} {pricedProduct.currency}
            <img style={{ maxWidth: "100px" }} src={pricedProduct.product.images[0]}></img>
          </li>
        )}
      </ul>
    </Layout>
  )
}
