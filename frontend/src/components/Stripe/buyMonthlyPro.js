import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {

  render() {
    return (
      <StripeCheckout
        amount="500"
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="YourDomain.tld"
        stripeKey="your_PUBLISHABLE_stripe_key"
        token={this.onToken}
        zipCode
      />
    )
  }
}