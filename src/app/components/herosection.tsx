import React from "react";
import Image from "next/image";

const RentalPlatform: React.FC = () => {
  return (
    <div className=" bg-[#F6F7F9]">
    <div className="flex gap-x-1  flex-wrap justify-center ">
      {/* First Rental Card */}
      <div className=" mr-8 h-[300px] w-[600px] bg-[#54A6FF] p-6 flex flex-col ml-20 rounded-lg mx-auto sm:mx-auto mt-8">
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold">
          The Best Platform <br /> for Car Rental
        </h1>

        {/* Paragraph */}
        <p className="text-white text-sm mt-4">
          Ease of doing a car rental safely and <br />
          reliably. Of course at a low price.
        </p>

        {/* Rental Car Button */}
        <button className="bg-[#3563E9] text-white mt-4 h-[64px] w-[92px] rounded-sm">
          RentalCar
        </button>

        {/* Image */}
        <Image
          src="/images/car1.png"
          alt="Car Rental"
          height={500} width={500}
          className="mt-4 h-[100px] w-[300px] object-cover mx-auto"
        />
      </div>

      {/* Second Rental Card */}
      <div className="h-[300px] w-[600px] bg-[#3563E9] p-6 flex-col rounded-lg sm:block hidden mr-10 mt-8">
        {/* Title */}
        <h1 className="text-white text-2xl font-semibold">
          Easy way to rent a <br /> car at low price
        </h1>

        {/* Paragraph */}
        <p className="text-white text-sm mt-4">
          Providing cheap car rental services <br />
          and safe and comfortable facilities.
        </p>

        {/* Rental Car Button */}
        <button className="bg-[#54A6FF] text-white mt-4 h-[28px] w-[92px] rounded-sm ">
          RentalCar
        </button>

        {/* Image */}
        <Image
          src="/images/car2.png"
          alt="Car Rental"
          height={500} width={500}
          className="mt-2 h-[100px] w-[300px] object-cover mx-auto "
          
        />
      </div>
    </div>
    </div>
  );
};

export default RentalPlatform;