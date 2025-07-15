import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

export const CheckoutForm = ({ className = "", paymentId, base_url }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setSubmitting(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${base_url}/cart?paymentId=${paymentId}`,
      },
    });

    if (error) {
      alert(error.message);
    }
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full mx-auto -mt-64 p-6 bg-white rounded-xl shadow-md space-y-4 ${className}`}
    >
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {submitting ? "Processing..." : "Submit Payment"}
      </button>
    </form>
  );
};
