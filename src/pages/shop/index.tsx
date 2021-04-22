import React from "react"
import getStripe from '../../get-stripe'
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import Products from "./products"

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
        <div>
          <h1>Kawa i rękodzieła ☕</h1>
          <Products />
          <Cart />
        </div>
      </CartProvider>
  )
}
