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
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error: createError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (createError) {
      setError(createError.message);
      return;
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date().toISOString(),
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      const res = await axiosSecure.post("/payment", payment);
      refetch();

      if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/paymentHistory");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-10 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        Checkout
      </h1>

      <p className="text-gray-700 mb-4 text-center md:text-left">
        Total Amount:{" "}
        <span className="font-semibold text-green-600">${totalPrice}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border p-4 rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm font-medium text-center md:text-left">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-primary w-full md:w-auto block mx-auto md:mx-0 px-6 py-3 font-semibold text-white rounded-lg transition hover:scale-105"
        >
          Pay
        </button>

        {transactionId && (
          <p className="text-green-500 text-center md:text-left mt-4">
            Transaction ID: <span className="font-semibold">{transactionId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
