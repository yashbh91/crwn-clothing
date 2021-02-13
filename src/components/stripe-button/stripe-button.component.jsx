import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_51IK0ecBZpEKtDM3raCwEjE0Yrr4xc1aM8awLNbraW9HG1dWrlfjZlBop5gwnxbpwiThJxXCZdIP1dridtyMVNlEK0021U5xUs9"
  const onToken = token => {
    alert("Payment Successful")
  }
  return <StripeCheckout name="CROWN CLOTHING Ltd." label="Pay Now" billingAddress shippingAddress image="https://svgshare.com/i/CUz.svg" description={`Your Total Is Rs${price}`} amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey} />
}

export default StripeCheckoutButton
