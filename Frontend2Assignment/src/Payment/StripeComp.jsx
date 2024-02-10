import React from 'react'
import Header from '../components/sections/Header';
import Footer from '../components/sections/Footer';
import CheckoutForm from './CheckoutForm';

import { useState, useEffect } from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';



function StripeComp() {

  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch("/config").then(async(r) => {
      const {publishableKey} = await r.json();

      console.log(publishableKey)
    })
  },[])


  
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'sek',
  };


  return (
    <div>
      <Header />
      {/* <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements> */}
      <Footer />
    </div>
    
  )
}

export default StripeComp