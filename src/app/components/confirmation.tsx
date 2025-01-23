import React from "react";
import Image from "next/image";
import Link from "next/link";
const Confirmation: React.FC = () => {
  return (
    <div className="h-auto w-auto max-w-4xl ml-2 rounded-lg p-6 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Confirmation Title */}
        <h1 className="text-4xl font-bold">Confirmation</h1>
        {/* Step 404 */}
        <p className="text-lg font-medium text-gray-700">Step 404</p>
      </div>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-600">
        We are getting to the end, just a few more clicks and your retail is
        ready!
      </p>

      {/* Agreement Section */}
      <div className="mt-8 space-y-6">
        {/* I Agree with Sending Marketing Emails */}
        <div className="flex items-center  bg-gray-200 gap-x-2 rounded-md h-10">
          <div className="h-6 w-6 border ml-2 border-gray-500"></div>
          <p className="text-1xl  font-bold  text-black ml-4">
            I agree with sending marketing and newsletter emails. No spam
            promised.
          </p>
        </div>

        {/* I Agree with Terms and Conditions */}
        <div className="flex items-center gap-x-2 bg-gray-200 rounded-md h-10">
          <div className="h-6 w-6 border ml-2 border-gray-500"></div>
          <p className="text-1xl font-bold text-black ml-4">
            I agree with our terms and conditions and privacy policy.
          </p>
        </div>

        {/* Rent Now Button */}
        <Link
        href="/lastpage">
        <button className="bg-blue-800 text-white h-[56px] w-36  rounded-md mt-6">
          Rent Now
        </button></Link>
      </div>

      {/* Image Section */}
      <div className="mt-8 ">
        <Image
          src="/images/security.png"
          alt="Confirmation"
          height={100}width={100}
          className=" h-auto mt-4 w-auto object-cover"
        />
      </div>

      {/* Data Saved and Security Information */}
      <div className="mt-0">
        <h1 className="text-1xl font-bold text-black">All your data is saved</h1>
        <p className="mt-2 text-md text-gray-600">
          We are using the most advanced security to provide you the best
          experience ever. Enough said.
        </p>
      </div>
    </div>
  );
};

export default Confirmation;