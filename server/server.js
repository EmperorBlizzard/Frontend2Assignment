const express = require("express");
const app = express();
const { resolve } = require("path");
const env = require("dotenv").config({path: "./.env"});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

app.use(express.static(process.env.STATIC_DIR));
app.use(express.json());
app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try{
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'sek',
      amount: 1999,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({clientSecret: paymentIntent.client_secret});
  } catch(e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  };
})



app.post("/checkout", async (req, res) => {
  try{
    
    const items = req.body.items;
    let lineItems = [];
  
    items.map((item) => {
      lineItems.push(
        {
          price: item.id,
          quantity: item.quantity,
        }
      )
    });
    console.log(lineItems)
  
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:4242/success",
      cancel_url: "http://localhost:4242/cancel",
    })
  
    res.send(JSON.stringify({
      url: session.url
    }));
  }catch(e){
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
  
})

app.listen(5252, () => {
  console.log(`Node server listening at http://localhost:5252`)
});

