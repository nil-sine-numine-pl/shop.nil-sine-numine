import React from 'react'
import CSS from 'csstype';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

const cardStyles: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
    backgroundColor: '#fff',
    borderRadius: '6px',
    maxWidth: '300px',
}
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
const imageStyles: CSS.Properties = {
    maxWidth: '175px'
}

export default ({ product }) => {
    product = product ?? {};
    const { addItem } = useShoppingCart()
    return (
        <div style={cardStyles}>
            <img style={imageStyles} src={product.image} alt="" />
            <h4>{product.name}</h4>
            <p>
                Price:{`${parseInt(product.price) / 100} ${product.currency}`}
            </p>
            <button style={buttonStyles} onClick={() => addItem(product)}>
                ADD TO CART
      </button>
        </div>
    )
}
