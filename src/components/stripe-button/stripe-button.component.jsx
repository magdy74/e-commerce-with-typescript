import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51NH2HmGL9OGrPfE6bbZe5Fc7yAqhvsw0QYtloKa4m7WhyBpleWm9P3FJGbRWfCxZv1AmH8FRJFbUioIQPDkiKuN000MnocZzyh';
    const onToken = token => {
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN clothing'
            billingAddress
            shippingAddress
            description={`Your total is ${price}$`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
} 

export default StripeCheckoutButton;