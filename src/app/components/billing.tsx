import React from "react";
import Image from "next/image";

const RentalInfo: React.FC = () => {
  return (
    <div className="h-auto w-full max-w-4xl rounded-lg  ml-2  bg-white p-6 flex flex-col space-y-6 ">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Rental Info Title */}
        <h1 className="text-2xl font-bold">Rental Info</h1>
        {/* Step 2 of 4 */}
        <p className="text-lg font-medium text-gray-700">Step 2 of 4</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500">
        Please select your information methods
      </p>

      {/* Pickup Section */}
      <div className="flex items-center gap-x-4">
        {/* Pickup Image */}
        <div className="flex items-center gap-x-2 pt-4">
          <Image
            src="/images/mark.png"
            alt="Pickup"
            height={500}width={500}
            className="h-6 w-6"
          />
          <p className="text-lg font-medium text-gray-700">PickUp</p>
        </div>
      </div>

      {/* Form for Pickup */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6 ">
        {/* Location */}
        <div className="flex flex-col flex-1 ">
          <label
            htmlFor="pickupLocation"
            className="text-1xl  font-bold  text-black "
          >
            Location
          </label>
          <input
            id="pickupLocation"
            type="text"
            placeholder="Select your location"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="pickupDate"
            className="text-1xl  font-bold  text-black"
          >
            Date
          </label>
          <input
            id="pickupDate"
            type="text"
            placeholder="Select your date"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>

      {/* Time */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        <div className="flex flex-col flex-1">
          <label
            htmlFor="pickupTime"
            className="text-1xl  font-bold  text-black"
          >
            Time
          </label>
          <input
            id="pickupTime"
            type="text"
            placeholder="Select your time"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>

      {/* Drop Off Section */}
      <div className="flex items-center gap-x-4 pt-10">
        {/* Drop Off Image */}
        <div className="flex items-center gap-x-2">
          <Image
            src="/images/mark.png"
            alt="Drop Off"
            height={100}width={100}
            className="h-6 w-6"
          />
          <p className="text-lg font-medium  text-gray-700">Drop Off</p>
        </div>
      </div>

      {/* Form for Drop Off */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        {/* Location */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="dropoffLocation"
            className="text-1xl  font-bold  text-black"
          >
            Location
          </label>
          <input
            id="dropoffLocation"
            type="text"
            placeholder="Select your location"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="dropoffDate"
            className="text-1xl  font-bold  text-black"
          >
            Date
          </label>
          <input
            id="dropoffDate"
            type="text"
            placeholder="Select your date"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>

      {/* Time */}
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-6">
        <div className="flex flex-col flex-1">
          <label
            htmlFor="dropoffTime"
            className="text-1xl  font-bold  text-black"
          >
            Time
          </label>
          <input
            id="dropoffTime"
            type="text"
            placeholder="Select your time"
            className="h-[56px] w-full md:w-[386px] border border-gray-300 rounded-md px-3 bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;