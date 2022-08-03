/* eslint-disable react/button-has-type */
// import React from 'react';

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
/* eslint-disable */
const KEY =
  'pk_test_51LSnWmIkUfK5hshaCwRmVfTe2UCtqDF6nfO4zHNGlKzIf1fCtiAYu5H98ANcgFQHctaPufGmX9b1lqGVS2I9IDoY00XMi9IAXD';

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <StripeCheckout
        name="Lama Shop"
        image="https://avatars.githubusercontent.com/u/1486366?v=4 "
        billingAddress
        shippingAddress
        description="Your total is 20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Add Credits
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
