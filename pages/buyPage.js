import Layout from "../components/layout";

import {CardCvcElement, CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');





export default function Checkout(){
    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };
    return(
        <Layout>
   <Elements stripe={stripePromise} >
   <form>
      <CardElement />
      <button>Submit</button>
    </form>
    </Elements>
        </Layout>
    )
}