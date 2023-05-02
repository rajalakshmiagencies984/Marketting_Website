import React from 'react'

const PUBLIC_KEY = "pk_test_51N2aHpSFIjWfiJ2jsw0xuQ45Ycc8Lysmets6cS63if3ewuzs6ziw5CyRSwVrkzAwVnHF8q7nBgdKIJBCNYQzyOZM00H9heTncL";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Stripe = () => {
  return (
    <div>
      pay
    </div>
  )
}

export default Stripe
