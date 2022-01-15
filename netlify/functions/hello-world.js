const stripe = require('stripe')(process.env.STRIPE_SECRET)
//import { validateCartItems} from 'use-shopping-cart/src/serverUtil'
const validateCartItems = require('use-shopping-cart/src/serverUtil').validateCartItems
/*
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */
//const inventory = require('./data/products.json')

exports.handler = async (event) => {
  // let product
  // try {
  //   product = JSON.parse(event.body)
  // } catch (error) {
  //   return {
  //     statusCode: 400,
  //     body: JSON.stringify({
  //       message: 'Received malformed JSON.',
  //       error: error.message
  //     })
  //   }
  // }

  // let line_items
  // try {
  //   line_items = validateCartItems(inventory, product)
  // } catch (error) {
  //   return {
  //     statusCode: 422,
  //     body: JSON.stringify({
  //       message: 'Some of the items in your cart are invalid.',
  //       error: error.message
  //     })
  //   }
  // }
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  console.log(event)
  console.log(JSON.parse(event.body))
  return {
    statusCode: 200,
    body: JSON.stringify(JSON.parse(event.body))
  }

  TODO
  Array(3) [ {…}, {…}, {…} ]
  1: Object { id: "price_1IUylZILk188gF3zAAQhGGnN", sku: "price_1IUylZILk188gF3zAAQhGGnN", name: "Numine Coffee 500g", … }
  currency: "pln"
  description: "Kawa ziarnista, uprawiana przez nas w Rwandzie. Aromaty czekolady oraz mango, kawa idealna do ekspresów przelewowych."
  formattedValue: "PLN 250.00"
  id: "price_1IUylZILk188gF3zAAQhGGnN"
  image: Array [ "https://files.stripe.com/links/MDB8YWNjdF8xSVVyd2VJTGsxODhnRjN6fGZsX3Rlc3RfdzBlNVJEOFl3ZjZNTjAwTFNWdWI4aWc500ULDWxUO4" ]
  isShipment: false
  name: "Numine Coffee 500g"
  price: 25000
  quantity: 1
  sku: "price_1IUylZILk188gF3zAAQhGGnN"
  value: 25000
  2: Object { id: "price_1KFLWsILk188gF3zdvNNHWeJ", sku: "price_1KFLWsILk188gF3zdvNNHWeJ", name: "Przesyłka InPost", … }
  currency: "pln"
  description: null
  formattedValue: "PLN 12.99"
  id: "price_1KFLWsILk188gF3zdvNNHWeJ"
  image: Array [ "https://files.stripe.com/links/MDB8YWNjdF8xSVVyd2VJTGsxODhnRjN6fGZsX3Rlc3RfSWJZMVNKZkVvN1VXUDlaWXZtWFZaa25O00hpMeRdUI" ]
  isShipment: true
  name: "Przesyłka InPost"
  price: 1299
  quantity: 1
  sku: "price_1KFLWsILk188gF3zdvNNHWeJ"
  value: 1299
  length: 3

  let session
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'p24'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['PL']
      },
      mode: 'payment',
      success_url: 'https://numine.pl/thanks/',
      cancel_url: 'https://numine.pl',
      line_items: [
        {
          price_data: {
            currency: 'PLN',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
    })
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'While communicating with Stripe, we encountered an error.',
        error: error.message
      })
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id })
  }
}