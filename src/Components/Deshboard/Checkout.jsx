import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
import useAuth from "../Auth/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setclientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const navigate=useNavigate()

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log("this is show the total price", totalPrice);
  useEffect(() => {
   if(totalPrice>0){
     axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setclientSecret(res.data.clientSecret);
      });
   }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymouse",
            name: user?.displayName || "anonymouse",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          data: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log("payment saved", res.data);
        refetch()
        if(res.data?.paymentResult?.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Payment has been Successfully Done",
  showConfirmButton: false,
  timer: 1500
})
navigate('/dashboard/paymentHistory')
        }
      }
    }
  };
  return (
    <div>
      <h1>This is checkOut form</h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm my-3 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text red">{error}</p>
        {transactionId && (
          <p className="text-green-400">
            {" "}
            Your transaction Id : {transactionId}{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
