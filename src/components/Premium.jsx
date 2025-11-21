import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/contants";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);
  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });
    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { membershipType: type },
      { withCredentials: true }
    );

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: "Dev Tinder",
      description: "Connect to other Developers",
      order_id: orderId, // This is the order_id created in the backend
      //   callback_url: "http://localhost:3000/payment-success", // Your success URL
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      //   handler: function (response) {
      //     alert(response.razorpay_payment_id);
      //     alert(response.razorpay_order_id);
      //     alert(response.razorpay_signature);
      //   },
      handler: verifyPremiumUser,
    };

    //It Should Open Razorpay Dialog Box
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return isUserPremium ? (
    <div>
      <h1>You are already a premium Member</h1>
    </div>
  ) : (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li>Chat with other people</li>
            <li>100 connections per day</li>
            <li>Blue tick - 3 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("silver")}
            className="btn btn-secondary mt-2"
          >
            Get Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Membership</h1>
          <ul>
            <li>Chat with other people</li>
            <li>Infinite connections per day</li>
            <li>Blue tick - 6 months</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-primary mt-2"
          >
            Get Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
