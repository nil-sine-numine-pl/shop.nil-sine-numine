import React from "react"
import getStripe from '../../get-stripe'
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import Products from "./products"
import { Page } from "../../components/page"
import { Lined, H1 } from '../../components/lined'

export default () => {
  const isBrowser = () => typeof window !== "undefined"
  return (
      <CartProvider
        mode="client-only"
        stripe={getStripe()}
        successUrl={`${isBrowser && window.location.origin}/thanks/`}
        cancelUrl={`${isBrowser && window.location}`}
        currency="PLN"
        allowedCountries={['PL']}
        billingAddressCollection={true}
      >
        <Page>
          <Lined><H1>Kawa i rękodzieła</H1></Lined>
          <Products />
          <Cart />
        </Page>
      </CartProvider>
  )
}
