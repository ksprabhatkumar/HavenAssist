import React from "react";

const PaymentSummary = () => {
  const price = 1000; // Example price
  const appointmentFee = 100; // Example appointment fee
  const taxes = 50; // Example taxes
  const totalPrice = price + appointmentFee + taxes;

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Payment Summary
      </h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 dark:text-gray-300">Price:</span>
        <span className="text-gray-800 dark:text-gray-100">₹{price}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 dark:text-gray-300">Appointment Fee:</span>
        <span className="text-gray-800 dark:text-gray-100">₹{appointmentFee}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 dark:text-gray-300">Taxes:</span>
        <span className="text-gray-800 dark:text-gray-100">₹{taxes}</span>
      </div>
      <hr className="my-4 border-gray-300 dark:border-gray-600" />
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Total Price:</span>
        <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">₹{totalPrice}</span>
      </div>
      <button className="w-full bg-primary text-white py-2 rounded-lg hover:scale-105 transition-colors">
        Pay via Online
      </button>
    </div>
  );
};

export default PaymentSummary;
