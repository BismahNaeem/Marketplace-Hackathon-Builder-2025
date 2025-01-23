import React from "react";
import Image from "next/image";

const BillingInfo: React.FC = () => {
  return (
    <div className="flex  flex-col  sm:flex-row lg:flex-row gap-x-4  ">
    <div className=" h-auto w-auto ml-2   max-w-4xl bg-white  rounded-lg p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex justify-between  items-center">
        {/* Billing Info Title */}
        <h1 className="text-2xl font-bold">Billing Info</h1>
        {/* Step 1 of 4 */}
        <p className="text-lg font-medium text-gray-700">Step 1 of 4</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">Your Billing Info</p>

      {/* Name and Phone Number Section */}
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-1xl  font-bold  text-black">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
        {/* Phone Number */}
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-1xl font-bold text-black"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            className="h-[56px]  md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>

      {/* Address and Time, City Section */}
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-6">
        {/* Address */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-1xl  font-bold  text-black">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
        {/* Time, City */}
        <div className="flex flex-col">
          <label
            htmlFor="timeCity"
            className="text-1xl  font-bold  text-black"
          >
            Time, City
          </label>
          <input
            id="timeCity"
            type="text"
            placeholder="Time, City"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>

     

    </div>
    <div>
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg border mt-4 lg:mt-0">
      {/* Rental Summary */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1">Rental Summary</h2>
      <p className="text-sm text-gray-500 mb-4">
        Prices may change depending on the length of the rental and the price of your rental car.
      </p>

      {/* Car Info */}
      <div className="flex items-center space-x-4 mb-6">
        {/* Car Image */}
        <div className="w-20 h-16 bg-blue-600 rounded-md overflow-hidden">
          <Image
            src="/images/car2.png"
            alt="Car"
            className="object-contain w-full h-full"
            height={500 }width={500}
          />
        </div>

        {/* Car Name and Rating */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">Nissan GT – R</h3>
          <div className="flex items-center text-yellow-500 text-sm">
            ★★★★☆ <span className="ml-2 text-gray-500 text-xs">440+ Reviewer</span>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="text-sm mb-4">
        <div className="flex justify-between mb-8 text-gray-600">
          <span>Subtotal</span>
          <span>$80.00</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>$0</span>
        </div>
      </div>

      {/* Promo Code */}
       <div className=" mb-4">
         
       <div className="flex flex-col">
         
          <input
            id="name"
            type="text"
            placeholder="Apply promo code"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
           
          />
       
      </div>

      {/* Total Price */}
      <div className="flex  mt-4 justify-between items-center  text-lg font-bold text-gray-800">
        <span>Total Rental Price</span>
        <span>$80.00</span>
      </div>
      <p className="text-xs text-gray-500">Overall price and includes rental discount</p>
    </div>
  
    </div>
     </div>
     </div>
  );
};

export default BillingInfo;