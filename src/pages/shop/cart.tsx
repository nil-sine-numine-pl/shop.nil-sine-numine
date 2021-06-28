import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import CartView from '../../components/cartView'
import styled from '@emotion/styled'
import cartImg from '../../images/cart.svg'
import { Colors } from '../../components/consts'

const Icon = styled.img({
    width: '2rem',
    height: '2rem'
  })

const Circle = styled.div({
    backgroundColor: 'white',
    display: 'flex',
    padding: '0.75rem',
    borderRadius: '50%',
    alignItems: 'center',
    alignContent: 'center',
    width: '2rem',
    border: `1px solid ${Colors.primary}`,
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: '1.5rem',
})

const SmallCircle = styled.div({
    borderRadius: '50%',
    width: '1.25rem',
    backgroundColor: Colors.primary,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    padding: '0.1rem',
    fontWeight: 'bold',
    marginTop: '2.5rem',
    marginLeft: '-1.2rem'
})

const CartLocation = styled.div({
    position:'fixed',
    marginTop: '6rem',
    maxWidth: '800px',
    width: '100%',
    height: 0,
    top: 0
})

const Cart = () => {
    const [viewCart, setViewCart] = useState(false)
    const cart = useShoppingCart()

    let cartProducts = Object.keys(cart.cartDetails)
        .map(ix => cart.cartDetails[ix]);

    return (
      <>
        <CartLocation>
            <Circle onClick={() => setViewCart(true)}>
                <Icon src={cartImg} alt="Basket"/>
                <SmallCircle>
                    {cartProducts.map(product => product.quantity)
                                 .reduce((acc: number, quantity) => acc + quantity, 0)}
                </SmallCircle>
            </Circle>
        </CartLocation>
        {viewCart ? <CartView cart={cart} onClose={() => setViewCart(false)}></CartView>: null}
      </>
    )
}

export default Cart