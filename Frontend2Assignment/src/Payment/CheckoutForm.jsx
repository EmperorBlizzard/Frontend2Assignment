import React from 'react'
import { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return;
    }
    
    setIsProcessing(true);

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      }
    })

    if(error){
      setMessage(error.message);
    }

    setIsProcessing(false);
  }

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe} id='submit'>
        <span id='button-text'>
          {isProcessing ? "Processing ..." : "Pay Now"}
        </span>
      </button>

      {message && <div id='payment-message'>{message}</div>}
    </form>
  )
}

export default CheckoutForm