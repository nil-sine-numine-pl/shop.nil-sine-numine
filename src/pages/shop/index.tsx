import React from "react"
import getStripe from '../../get-stripe'
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import Products from "./products"
import { Page } from "../../components/page"

export default () => {
  return (
      <CartProvider
        mode="client-only"
        stripe={getStripe()}
        successUrl={`https://nilsinenumine.netlify.app/thanks/`}
        cancelUrl={`https://nilsinenumine.netlify.app/`}
        currency="PLN"
        allowedCountries={['PL']}
        billingAddressCollection={true}
      >
        <Page>
          <h1>Kawa i rękodzieła ☕</h1>
          <Products />
          <Cart />
        </Page>
      </CartProvider>
  )
}
