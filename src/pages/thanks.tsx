import React, { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import Layout from "../components/layout"

export default () => {
  const cart = useShoppingCart()
  useEffect(() => { console.log('aaaaaaaaaaaa'); cart.clearCart() })
  return <Layout><p>Cart cleared.</p></Layout>
}