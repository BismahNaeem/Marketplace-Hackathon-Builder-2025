import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Top Section */}
      <div className=" lg:flex  justify-between    bg-white mb-2 mt-20 px-6 md:px-12">
        <div className=' lg:flex   justify-between'>
          <div className=''><h1 className="text-[#3563E9] text-2xl font-bold">MORENT</h1>
          <p className="mt-4 leading-[1.5] text-sm text-[#90A3BF] max-w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p></div>
        

        {/* Links Section */}
        <div className=" flex   gap-y-10  lg:ml-96 ">
          {/* About and Community - Horizontally aligned on small screens */}
          <div className="sm:flex mt-4 mx-auto flex-col lg:flex-row flex sm:gap-x-12 sm:justify-between ">
            {/* About Section */}
            <ul className="text-center  sm:text-left">
              <h1 className="text-lg font-bold">About</h1>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">How it works</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Featured</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Partnership</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Business relation</li>
            </ul>

            {/* Community Section */}
            <ul className="text-center sm:text-left">
              <h1 className="text-lg font-bold">Community</h1>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Events</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Blog</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Podcast</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Invite a friend</li>
            </ul>
            


            <div>
            <ul className="text-center  md:text-left">
              <h1 className="text-lg font-bold">Socials</h1>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Discord</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Instagram</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Twitter</li>
              <li className="text-[#90A3BF] mt-4 text-sm md:text-base">Facebook</li>
            </ul>
          </div>
          </div>

          </div>
         
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#90A3BF] py-6 px-6 md:px-12">
        <h1 className="text-center md:text-left text-sm md:text-base font-bold">
          ©2022 MORENT. All rights reserved
        </h1>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-y-2 md:gap-x-8 text-center md:text-left text-sm md:text-base font-bold">
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;