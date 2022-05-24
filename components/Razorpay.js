import React, { useState, useEffect } from "react";
import { createPayment } from "../services/apiServices";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

const Razorpay = ({ paymentInfo }) => {
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const payload = {
      name: paymentInfo.name,
      email: paymentInfo.email,
      mobile: paymentInfo.mobile,
      iam: paymentInfo.iam,
      college: paymentInfo.college,
      amount: paymentInfo.amount,
      batchId: paymentInfo.batchId,
    };

    const data = await createPayment(payload).then(
      ({ data }) => data.data.order
    );

    const options = {
      key: __DEV__
        ? process.env.RAZORPAY_ID_TEST
        : process.env.RAZORPAY_ID_LIVE,
      currency: "INR",
      amount: data.amount.toString(),
      order_id: data.rzpOrderId,
      name: "KAARWAN EDUVENTURES PVT LTD",
      description: paymentInfo?.Workshop?.name,
      image: "https://cdn.razorpay.com/logos/GPKyOqzis6SPB4_large.jpg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: paymentInfo.name,
        email: paymentInfo.email,
        contact: paymentInfo.mobile,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    displayRazorpay();
  }, []);

  return <div>{""}</div>;
};

export default Razorpay;
