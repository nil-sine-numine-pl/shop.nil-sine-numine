import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const cart = useShoppingCart()

    let cartProducts = Object.keys(cart.cartDetails)
        .map(personNamedIndex => cart.cartDetails[personNamedIndex]);

    return (
        <div>
            <p>Number of Items: {cart.cartCount}</p>
            <p>Total: {cart.totalPrice}</p>
            <p>A: {cartProducts[0]?.name}</p>
            <button
                disabled={loading}
                onClick={() => {
                    setLoading(true)
                    cart.redirectToCheckout()
                }}
            >
                {loading ? 'Loading...' : 'Checkout'}
            </button>
            <button onClick={cart.clearCart}>
                Clear cart
      </button>
        </div>
    )
}

export default Cart