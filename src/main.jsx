import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import AuthProvider from "./provider/AuthProvider";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

AOS.init();

const queryClient = new QueryClient();
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Elements stripe={stripePromise}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </Elements>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
