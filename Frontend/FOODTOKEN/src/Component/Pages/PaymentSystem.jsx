
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe public key
const stripePromise = loadStripe('your-publishable-key-here');
function PaymentSystem() {
  
  return (
    <div>
      
    </div>
  )
}

export default PaymentSystem
