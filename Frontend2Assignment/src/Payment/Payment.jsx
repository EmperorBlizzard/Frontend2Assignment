import { useEffect, useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import {Elements} from "@stripe/react-stripe-js"

function Payment(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    fetch("/api/config").then(async(r) => {
      const {publishableKey} = await r.json();
      setStripePromise(loadStripe(publishableKey)); 
    })
  },[])

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async(r) => {
      const {clientSecret} = await r.json();
      setClientSecret(clientSecret); 
    })
  },[])

  return (
    <>
      <Header />
      <h1>React Stripe and the Payment Element</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{clientSecret}}>
          <CheckoutForm />
        </Elements>
      )}
      <Footer />
    </>
  )
}

export default Payment