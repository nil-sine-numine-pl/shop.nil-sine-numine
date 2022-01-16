const stripe = require('stripe')(process.env.STRIPE_SECRET)

exports.handler = async event => {
  let products = JSON.parse(event.body)
  let session
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'p24'],
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['PL']
      },
      mode: 'payment',
      success_url: 'https://numine.pl/thanks/', // TODO - ENV
      cancel_url: 'https://numine.pl',
      phone_number_collection: {
        enabled: true,
      },
      line_items: products.map(product => { return {price: product.id, quantity: product.quantity}}),
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