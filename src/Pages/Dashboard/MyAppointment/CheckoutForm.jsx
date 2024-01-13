import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = ({ modalData, setPaymentInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  // create payment intent
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: modalData?.price })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [modalData]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("Payment Method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);
    if (paymentIntent.id) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Payment successful",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (paymentIntent.status === "succeeded") {
      //save payment info to the server
      // update status on db
      const paymentInfo = {
        ...modalData,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      try {
        axiosSecure.post("/payments", paymentInfo);
      } catch (erro) {
        console.log(error);
      }

      setProcessing(false);
      setPaymentInfo(paymentIntent);
    }

    // console.log(clientSecret, processing, stripe);
  };

  return (
    <form onSubmit={handleSubmit} className="card-body mt-5">
      <CardElement
        className="border py-4 px-2"
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
        type="submit"
        className="btn btn-primary mt-4"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay ${modalData?.price}
      </button>
    </form>
  );
};

export default CheckoutForm;
