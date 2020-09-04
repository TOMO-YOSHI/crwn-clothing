import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price * 100;
    const publishableKey =
      "pk_test_51HNUTnIRSLa0kpuXfj6xYEf5AvPF6mxxEVfJmh9qeW4b9AMendCTpl2P8QOxIRuuxOkozlQjtV0Q9zG2Hd1T3yMc00T58VY9KW";

    const onToken = token => {
        console.log(token);
        alert('Paymant Successful');
    }

    return (
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;