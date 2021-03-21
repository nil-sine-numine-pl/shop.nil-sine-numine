import React, { useState } from 'react'
import CSS from 'csstype'
import { useShoppingCart } from 'use-shopping-cart'

const buttonStyles: CSS.Properties = {
    fontSize: '13px',
    textAlign: 'center',
    color: '#fff',
    outline: 'none',
    padding: '12px',
    boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
    backgroundColor: 'rgb(255, 178, 56)',
    borderRadius: '6px',
    letterSpacing: '1.5px',
}

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const cart = useShoppingCart()

    let cartProducts = Object.keys(cart.cartDetails)
        .map(personNamedIndex => cart.cartDetails[personNamedIndex]);

    return (
        <div>
            <p>Number of Items: {cart.cartCount}</p>
            <p>Total: {cart.formattedTotalPrice}</p>
            <p>A: {cartProducts[0]?.name}</p>
            <p>{JSON.stringify(cart)}</p>

            <button
                style={buttonStyles}
                disabled={loading}
                onClick={() => {
                    setLoading(true)
                    cart.redirectToCheckout()
                }}
            >
                {loading ? 'Loading...' : 'Checkout'}
            </button>
            <button style={buttonStyles} onClick={cart.clearCart}>
                Clear cart
      </button>
        </div>
    )
}

export default Cart