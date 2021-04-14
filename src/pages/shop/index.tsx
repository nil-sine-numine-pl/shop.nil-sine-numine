import React from "react"
import getStripe from '../../get-stripe'
import { CartProvider } from "use-shopping-cart"
import Cart from "./cart"
import Skus from "./products"

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
          <Cart />
          <Skus />
        </div>
      </CartProvider>
  )
}
