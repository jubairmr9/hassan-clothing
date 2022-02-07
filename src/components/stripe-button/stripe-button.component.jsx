import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KQUFLDEeS4JXManQa2R3fL1ZRvA6cINf6WdQh9AD0mJCT6OwJ503TGXkhUEXM0OPTTrFOk4Wabn8ZvyYtfMXAG000c2SllD3C";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful!")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Hassan Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
