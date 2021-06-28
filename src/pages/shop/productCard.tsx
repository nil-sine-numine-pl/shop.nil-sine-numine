import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import styled from "@emotion/styled"
import { Colors } from '../../components/consts'
import { Button } from '../../components/button'
import { price } from '../../priceFormatter'
const Card = styled.div({
    display: 'flex',
    backgroundColor: 'white',
    padding: '0.8rem',
    img: {
        minWidth: '12rem',
        maxWidth: '12rem',
        height: '11rem',
        objectFit: 'cover',
    }
  })

const Description = styled.p({
  overflow: 'hidden',
  display: '-webkit-box',
  lineClamp: 4,
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  fontSize: '.8rem',
  margin:0
})

const Product = styled.div({
    marginLeft: '.5rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    'h4': {margin: '0 0 .5rem 0'}
})

export default ({ product }) => {
    product = product ?? {};
    const { addItem } = useShoppingCart()
    return (
        <Card>
            <img src={product.image} alt="" />
            <Product>
              <h4>{product.name}</h4>
              <div>
                <Description>{product.description}</Description>
                <p style={{color:Colors.primary, margin:0, fontSize:'1.1rem'}}>{`${price(parseInt(product.price)/100)}`}</p>
              </div>
              <Button onClick={() => addItem(product)}>Do koszyka</Button>
            </Product>
        </Card>
    )
}
