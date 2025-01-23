import React from "react";
import Image from "next/image";

const PaymentMethod: React.FC = () => {
  return (
    <div className="h-auto w-auto max-w-4xl rounded-lg  ml-2 bg-white p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex justify-between  items-center">
        {/* PaymentMethod Title */}
        <h1 className="text-2xl font-bold">Payment Method</h1>
        {/* Step 3 of 4 */}
        <p className="text-lg font-medium text-gray-700">Step 3 of 4</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">
        Please enter your payment method
      </p>

      {/* Created Card Section */}
      <div className="flex justify-between items-center gap-x-4">
        {/* Left Side Image */}
        <div className="flex items-center gap-x-2">
          <Image
            src="/images/mark.png"
            alt="Created Card"
            height={100} width={100}
            className="h-6 w-6"
          />
          <p className="text-lg font-medium text-gray-700">Created Card</p>
        </div>
        {/* Right Side Logo */}
        <div className="flex items-center gap-x-2">
          <Image
            src="/images/visa.png"
            alt="Logo"
            height={100} width={100}
            className="h-auto w-auto"
          />
        </div>
      </div>

      {/* Card Number Section */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        {/* Card Number */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="cardNumber" className="text-1xl  font-bold  text-black">
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="Card Number"
            className="h-[56px] border bg-gray-200 border-gray-300 rounded-md px-3"
          />
        </div>
        {/* Explanation Date */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="expirationDate" className="text-1xl  font-bold  text-black">
            Expiration Date
          </label>
          <input
            id="expirationDate"
            type="text"
            placeholder="00-MM-YY"
            className="h-[56px] border bg-gray-200 border-gray-300 rounded-md px-3"
          />
        </div>
      </div>

      {/* Card Holder Section */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        {/* Card Holder */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="cardHolder" className="text-1xl  font-bold  text-black">
            Card Holder
          </label>
          <input
            id="cardHolder"
            type="text"
            placeholder="Card Holder"
            className="h-[56px] border bg-gray-200 border-gray-300 rounded-md px-3"
          />
        </div>
        {/* CVC */}
        <div className="flex flex-col sm:w-[396px]">
          <label htmlFor="cvc" className="text-1xl  font-bold  text-black">
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            placeholder="CVC"
            className="h-[56px] border bg-gray-200 border-gray-300 rounded-md px-3"
          />
        </div>
      </div>

      {/* Payment Options */}
      <div className="flex flex-col gap-y-4">
        {/* PayPal Option */}
        <div className="flex justify-between items-center bg-slate-200 rounded-md h-12">
          <div className="  h-6 w-6 rounded-full border mt-2 ml-4 border-gray-500">
          <p className=" ml-10 font-bold text-black text-1xl ">PayPal</p></div>
          <Image
            src="/images/paypal.png"
            alt="PayPal"
            className="h-auto w-auto mr-2"
            height={100} width={100}
          />
        </div>

        {/* Bitcoin Option */}
        <div className="flex flex-col gap-y-4">
        {/* PayPal Option */}
        <div className="flex justify-between items-center bg-slate-200 rounded-md h-12">
          <div className="  h-6 w-6 rounded-full border mt-2 ml-4 border-gray-500">
          <p className=" ml-10 font-bold text-black text-1xl ">Bitcoin</p></div>
          <Image
            src="/images/Bitcoin.png"
            alt="Bitcoin"
            className="h-auto w-auto mr-2"
            height={100} width={100}
          />
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default PaymentMethod;