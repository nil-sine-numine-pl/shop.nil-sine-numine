import React, { useState, useEffect, useRef } from 'react'
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
    alignItems: 'center',
    alignContent: 'center',
    width: '2rem',
})

const SmallCircle = styled.div({
    borderRadius: '50%',
    width: '1.6rem',
    backgroundColor: Colors.primary,
    color: 'white',
    position: 'absolute',
    textAlign: 'center',
    padding: '0rem',
    fontWeight: 'bold',
    marginTop: '2rem',
    marginLeft: '-1rem'
})

type CartLocationProps = {
    isFixed: boolean
}

const CartLocation = styled.div<CartLocationProps>(
    {
        border: `1px solid ${Colors.primary}`,
        boxShadow: `5px 5px ${Colors.primary}`,
        cursor: 'pointer',
        display: 'flex',
        padding: `0.2rem`,
        alignItems: 'center',
        width: '100%',
        left: '0',
        top: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    props => ({ position: props.isFixed ? 'fixed' : 'relative' })
)

const Cart = () => {
    const [viewCart, setViewCart] = useState(false)
    const [isCartPanelFixed, setIsCartPanelFixed] = useState(false)
    const ref4CartInfoSticking = useRef<HTMLDivElement>()
    const cart = useShoppingCart()

    useEffect(() => {
        window.addEventListener("scroll", stickCart);
        return () => window.removeEventListener("scroll", stickCart);
    }, [])

    let stickCart = () => {
        const { offsetTop } = ref4CartInfoSticking?.current
        window.scrollY > offsetTop ? setIsCartPanelFixed(true) : setIsCartPanelFixed(false)
    }

    return (
        <>
            <div ref={ref4CartInfoSticking}></div>
            <CartLocation isFixed={isCartPanelFixed} id="#CartPanel" onClick={() => setViewCart(true)}>
                <div style={{textAlign: 'center', marginRight: '2rem'}}>
                    <h2 style={{ marginBottom: '0' }}>Twój koszyk</h2>
                    <small>(Kliknij by zobaczyć szczegóły)</small>
                </div>
                <Circle>
                    <Icon src={cartImg} alt="Basket" />
                    <SmallCircle>{cart.cartCount == 0 ? 0: cart.cartCount - 1}</SmallCircle>
                </Circle>
            </CartLocation>
            {viewCart ? <CartView cart={cart} onClose={() => setViewCart(false)}></CartView> : null}
        </>
    )
}

export default Cart