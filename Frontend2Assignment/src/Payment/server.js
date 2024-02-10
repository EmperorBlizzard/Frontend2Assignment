const stripe = require('stripe')('sk_test_51OeZZPDOLAe1Mz18b1Zo3NLrBimDANtfByRo7EkZzB1BFkw4Ac1LhW5HLDPJWMxHUooPUJHxh9GU8Ucwvy5htJE5000I684cy9');
const express = require('express');

const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173'

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: "sek",
  automatic_payment_methods: {
    enabled: true,
  },
})

app.get('/secret', async (req, res) => {
  const intent = (async () => {
    const response = await fetch('/secret');
    const {client_secret: clientSecret} = await response.json();
  })();
  res.json({client_secret: intent.client_secret});
});

app.listen(5173, () => {
  console.log('Running on port 5173');
})


app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [

    ]
  })
})