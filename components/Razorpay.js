import React, { useState, useEffect } from "react";
import { initiatePayment, addUser } from "../services/apiServices";
// import jsdom from "jsdom";
// const { JSDOM } = jsdom;
// global.document = new JSDOM().window.document;

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

const Razorpay = ({ paymentInfo, setSuccess }) => {
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
      batchId: paymentInfo.id,
      workshopId: paymentInfo.workshopId,
    };

    const user = await addUser(payload);
    console.log(user);
    if (user.status === 200) {
      setSuccess((prevState) => ({ ...prevState, userCreated: true }));
    }

    var data = await initiatePayment(payload).then(
      ({ data }) => data.data.order
    );

    const options = {
      key: process.env.RAZORPAY_ID_TEST,
      currency: "INR",
      amount: paymentInfo.amount.toString(),
      order_id: data?.rzpOrderId,
      name: "KAARWAN EDUVENTURES PVT LTD",
      description: paymentInfo?.Workshop?.name,
      image: "https://cdn.razorpay.com/logos/GPKyOqzis6SPB4_large.jpg",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        setSuccess((prevState) => ({ ...prevState, payment: true }));
        window.location.href = "https://www.kaarwan.com/index.php";
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
    loadScript();
    displayRazorpay();
  }, []);

  return <div>{""}</div>;
};

export default Razorpay;
