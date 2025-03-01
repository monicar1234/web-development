import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleRedirect = (platform) => {
    const paymentUrls = {
      PhonePe: "https://www.phonepe.com",
      "Google Pay": "https://pay.google.com",
      Paytm: "https://paytm.com",
    };

    const url = paymentUrls[platform];
    if (url) {
      window.open(url, "_blank"); // Opens the URL in a new tab
    } else {
      alert("Invalid payment platform.");
    }
  };

  const handleOrderNow = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      alert("Please fill in all the details before proceeding.");
      return;
    }
    setShowPaymentOptions(true);
  };

  const renderPaymentDetails = () => {
    switch (selectedPaymentOption) {
      case "UPI":
        return (
          <div className="space-y-2">
            <button
              className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => handleRedirect("PhonePe")}
            >
              PhonePe
            </button>
            <button
              className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => handleRedirect("Google Pay")}
            >
              Google Pay
            </button>
            <button
              className="w-full p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => handleRedirect("Paytm")}
            >
              Paytm
            </button>
          </div>
        );
      case "Net Banking":
        return (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
            />
          </div>
        );
      case "Credit/Debit Card":
        return (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
            />
          </div>
        );
      case "Bank Account":
        return (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Account Holder Name"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="text"
              placeholder="Account Number"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="text"
              placeholder="IFSC Code"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
              type="text"
              placeholder="Bank Name"
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1>
                {showPaymentOptions
                  ? selectedPaymentOption
                    ? `${selectedPaymentOption} Details`
                    : "Payment Options"
                  : "Order Your Book"}
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Body */}
            <div className="mt-4">
              {showPaymentOptions ? (
                selectedPaymentOption ? (
                  <div>
                    {renderPaymentDetails()}
                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded-full"
                        onClick={() => setSelectedPaymentOption(null)}
                      >
                        Back
                      </button>
                      <button
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                        onClick={() => setOrderPopup(false)}
                      >
                        Confirm Payment
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <ul className="space-y-2">
                      <li
                        className="p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setSelectedPaymentOption("UPI")}
                      >
                        UPI
                      </li>
                      <li
                        className="p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setSelectedPaymentOption("Net Banking")}
                      >
                        Net Banking
                      </li>
                      <li
                        className="p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setSelectedPaymentOption("Credit/Debit Card")}
                      >
                        Credit/Debit Card
                      </li>
                      <li
                        className="p-2 rounded-md border cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setSelectedPaymentOption("Bank Account")}
                      >
                        Bank Account
                      </li>
                    </ul>
                    <button
                      className="mt-4 bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded-full"
                      onClick={() => setShowPaymentOptions(false)}
                    >
                      Back
                    </button>
                  </div>
                )
              ) : (
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={userDetails.name}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={userDetails.address}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, address: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  />
                  <div className="flex justify-center">
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                      onClick={handleOrderNow}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;





