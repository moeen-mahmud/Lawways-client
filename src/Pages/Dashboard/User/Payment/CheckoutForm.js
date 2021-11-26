import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const CheckoutForm = ({ order }) => {
  const { orderPrice, name, email, _id } = order;
  const price = parseFloat(orderPrice);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    axios
      .post(
        "https://secret-plateau-62422.herokuapp.com/create-payment-intent",
        { price }
      )
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log(paymentMethod);
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Payment successful");
      console.log(paymentIntent);
      setProcessing(false);
      // Save payment to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        status: paymentIntent.status,
        transaction: paymentIntent.client_secret,
      };
      axios
        .put(
          `https://secret-plateau-62422.herokuapp.com/orders/payment/${_id}`,
          payment
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-medium text-gray-600">
        Pay with <span className="text-indigo-600">Stripe!</span>
      </h1>
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
        {processing ? (
          <ClipLoader color="#232832" loading={processing} size={20} />
        ) : (
          <button
            className="px-8 py-2 mt-4 text-gray-100 bg-indigo-600 rounded "
            type="submit"
            disabled={!stripe || success}
          >
            Pay
          </button>
        )}
      </form>
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      {success && <p className="mt-4 text-sm text-green-600">{success}</p>}
    </div>
  );
};

export default CheckoutForm;
