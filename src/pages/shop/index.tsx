import React from "react"
import Layout from "../../components/layout"
import getStripe from '../../get-stripe'
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import Skus from "./products"

export default () => {
  return (
    <Layout>
      <h1>Tu będzie sklep :)</h1>
      <CartProvider
        mode="client-only"
        stripe={getStripe()}
        successUrl={`${window.location.origin}/thanks/`}
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
    </Layout>
  )
}
