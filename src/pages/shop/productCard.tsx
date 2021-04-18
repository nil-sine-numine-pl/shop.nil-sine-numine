import React from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import styled from "@emotion/styled"
import Colors from '../../components/colors'

const Card = styled.div({
    display: 'flex',
    backgroundColor: 'white',
    padding: '1rem',
    img: {
        minWidth: '14rem',
        maxWidth: '14rem',
        height: '11rem',
        objectFit: 'cover',
    }
  })

const Product = styled.div({
    marginLeft: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '& h4': {margin: 0}
})

const Button = styled.button({
    backgroundColor: Colors.primary,
    border: 'none',
    textDecoration: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    padding: '.6rem',
    color: 'white',
    cursor: 'pointer',
    marginTop: 'auto',
    width: '100%'
})

var formatter = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  });

export default ({ product }) => {
    product = product ?? {};
    const { addItem } = useShoppingCart()
    return (
        <Card>
            <img src={product.image} alt="" />
            <Product>
              <h4>{product.name}</h4>
              <p>
                <p style={{color:Colors.primary, margin:0, fontSize:'1.2rem'}}>{`${formatter.format(parseInt(product.price)/100)}`}</p>
              </p>
              <Button onClick={() => addItem(product)}>Do koszyka</Button>
            </Product>
        </Card>
    )
}
