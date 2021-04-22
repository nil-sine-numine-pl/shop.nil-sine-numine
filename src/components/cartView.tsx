import React, { useState } from 'react'
import { ShoppingCartUtilities } from 'use-shopping-cart'
import { Button } from './button'
import styled from '@emotion/styled'
import Colors from './colors'
import { price } from '../priceFormatter'

const CartViewBox = styled.div({
    padding: '0.8rem',
    backgroundColor: 'white',
    position:'fixed',
    top:'0',
    maxWidth: '800px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    boxShadow: '0 0 .4rem #a4a4a4',
    left:0,
    right:0
})

const CartActions = styled.div({
    display: 'grid',
    gridColumn: 3,
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '.5rem',
})

export default (props: {cart: ShoppingCartUtilities, onClose: () => void}) => 
{
    const cart = props.cart
    const [loading, setLoading] = useState(false)
    let cartProducts = Object.keys(cart.cartDetails)
                             .map(ix => cart.cartDetails[ix])

return (
    <CartViewBox>
        {cartProducts.map((cartItem) => <p>{cartItem.name} x {cartItem.quantity}</p>)}
        <p>Number of Items: {cart.cartCount}</p>
        <p>Suma: {price(cart.totalPrice / 100)}</p>
        <CartActions>
            <Button onClick={props.onClose}>Zamknij</Button>
            <Button onClick={cart.clearCart}>Wyczyść koszyk</Button>
            <Button
                disabled={loading || cartProducts.length == 0}
                onClick={() => {
                    setLoading(true)
                    cart.redirectToCheckout()
                }}>
                {loading ? '...' : 'Do zapłaty'}
            </Button>
        </CartActions>
    </CartViewBox>)
}