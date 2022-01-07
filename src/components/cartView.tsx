import React, { useState, useEffect } from 'react'
import { Button } from './button'
import styled from '@emotion/styled'
import { Colors } from './consts'
import { price } from '../priceFormatter'
import jumpingDots from '../images/three-dots.svg'
import { useStaticQuery, graphql } from 'gatsby'
import { Price } from '../product'
import { ShoppingCartUtilities } from 'use-shopping-cart'

const CartViewBox = styled.div({
    maxHeight: '100vh',
    overflowY: 'auto',
    padding: '0.8rem',
    backgroundColor: 'white',
    position: 'fixed',
    top: '0',
    maxWidth: '800px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    boxShadow: '0 0 .4rem #a4a4a4',
    zIndex: 1,
    left: 0,
    right: 0,
})

const Icon = styled.img({
    width: '75px'
})

const CartActions = styled.div({
    display: 'grid',
    gridColumn: 3,
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '.5rem',
})

const CartItemsTable = styled.table({
    width: '100%',
    textAlign: 'left',
    img: {
        width: '5rem',
        height: '5rem',
        objectFit: 'cover',
    }
})

const BigEmoi = styled.div({
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '8rem',
    lineHeight: 'normal'
})

export default (props: { cart: ShoppingCartUtilities, onClose: () => void }) => {
    const cart = props.cart
    const [loading, setLoading] = useState(false)
    const cartData = useStaticQuery(
        graphql`
          query {
            allStripePrice(filter: {product: {active: {eq: true}, metadata: {shipment: {eq: "true"}}}, active: {eq: true}}) {
            nodes {
                id
                currency
                unit_amount
                product {
                    id
                    name
                    description
                    images
                }
            }
            },
            allMarkdownRemark(filter: {id: {}, frontmatter: {id: {eq: "info-cart"}}}) {
              nodes {
                html
              }
            }
          }`
    )
    const cartInfo = cartData.allMarkdownRemark.nodes[0].html
    const shipmentProduct = {
        sku:cartData.allStripePrice.nodes[0].id,
        id: cartData.allStripePrice.nodes[0].id,
        name: cartData.allStripePrice.nodes[0].product.name,
        price: cartData.allStripePrice.nodes[0].unit_amount,
        currency: cartData.allStripePrice.nodes[0].currency,
        description: cartData.allStripePrice.nodes[0].product.description,
        image: cartData.allStripePrice.nodes[0].product.images,
      }
    let cartProducts = Object.keys(cart.cartDetails).map(ix => cart.cartDetails[ix])

    const evaluateShipping = () => {
        cart.removeItem(shipmentProduct.id)
        const isShppingCharged = 
            cartProducts.find((item) => item.sku != shipmentProduct.sku && cart.cartCount > 0)
        if(isShppingCharged) {
            cart.addItem(shipmentProduct)
        }
    }
    
    useEffect(() => evaluateShipping(), [])

    return (
        <CartViewBox>
            <CartItemsTable>
                <thead>
                    <tr>
                        <th>Zdjęcie</th>
                        <th>Produkt</th>
                        <th>ilość</th>
                        <th>cena</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((cartItem) =>
                        <tr>
                            <td><img src={cartItem.image} alt="" /></td>
                            <td>{cartItem.name}</td>
                            {cartItem.sku !== shipmentProduct.sku 
                            ? <td style={{ whiteSpace: 'nowrap' }}>
                                <Button onClick={() =>{cart.decrementItem(cartItem.id); evaluateShipping()}} style={{ width: '2rem' }}>-</Button>
                                  <span style={{ width: '1.5rem', textAlign: 'center', display: 'inline-block' }}>
                                     {cartItem.quantity}
                                  </span>
                                <Button style={{ width: '2rem' }} onClick={() => cart.incrementItem(cartItem.id)}>+</Button>
                              </td>
                            : <td></td>}
                            <td>{price(cartItem.price * cartItem.quantity / 100)}</td>
                        </tr>)}
                </tbody>
            </CartItemsTable>
            {cartProducts.length == 0 ? <p style={{ textAlign: 'center' }}><BigEmoi>👻</BigEmoi><div>Koszyk jest pusty</div></p> : null}
            <p style={{ textAlign: 'right' }}>
                Suma: <span style={{ color: Colors.primary, margin: 0, fontSize: '1.1rem' }}>{price(cart.totalPrice / 100)}</span>
            </p>
            <CartActions>
                <Button onClick={props.onClose}>Zamknij</Button>
                <Button onClick={cart.clearCart}>Wyczyść koszyk</Button>
                <Button
                    disabled={loading || cartProducts.length == 0}
                    onClick={() => {
                        setLoading(true)
                        cart.redirectToCheckout()
                    }}>
                    {loading ? <Icon src={jumpingDots} alt="..." /> : 'Do zapłaty'}
                </Button>
            </CartActions>
            <small dangerouslySetInnerHTML={{ __html: cartInfo }} />
        </CartViewBox>)
}