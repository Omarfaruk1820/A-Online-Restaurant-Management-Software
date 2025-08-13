import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Pages/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
//TODO



const Payment = () => {
    const stripe_api_key="pk_test_51RdqlmFzk5HzqtMeCZAeXJDVNwrAcJixFRw0AzGC4CLZxou34x4a0bJ5BfzV2wxlDiHjlIvAV7YLc99J2odaqY2G00efPhVhve"
    const stripePromise = loadStripe(stripe_api_key);
    console.log('This is the payment api key here',stripePromise)
  return (
    <div>
      
      <section>
        <SectionTitle
          heading="Payment"
          subHeading="please payment to eat"
        ></SectionTitle>
      </section>
      <div>
        <Elements stripe={stripePromise}>
        <Checkout></Checkout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
