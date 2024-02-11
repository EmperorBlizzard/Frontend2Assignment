1. make .env file in server folder. ps check .env.example for what you need. API keys you fin at https://dashboard.stripe.com/test/apikeys.
2. make product in https://dashboard.stripe.com/test/products and change all the priceid in app.jsx in Frontend2Assignment folder. ps make all the products the same as on strapi.
3. start bikeShop, Frontend2Assignment and server by going into sever and typing npm run dev. It will start everyone.
4. for just stripe paymentIntent go to stripe page. for checkout session add a product to cart and go to cart and press Köp produkter.
5. for card testing go and see https://stripe.com/docs/testing?testing-method=card-numbers. ps. may not have set upp for declined cards. To test success type cardnumber: 4242 4242 4242 4242 date: 04/24 and cvc 424
