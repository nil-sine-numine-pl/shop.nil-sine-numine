import React from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import styled from "@emotion/styled"

const Card = styled.div({
    //boxShadow: '0px 0px 10px #c7c7c7',
    backgroundColor: 'white',
    padding: '2em',
    img: {
        width: '15rem',
        height: '12rem',
        objectFit: 'cover',
    }
  })

export default ({ product }) => {
    product = product ?? {};
    const { addItem } = useShoppingCart()
    return (
        <Card>
            <img src={product.image} alt="" />
            <h4>{product.name}</h4>
            <p>
                Price:{`${parseInt(product.price) / 100} ${product.currency}`}
            </p>
            <button onClick={() => addItem(product)}>ADD TO CART</button>
        </Card>
    )
}
