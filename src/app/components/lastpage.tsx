
import Image from "next/image";
export default function Page() {
  return (
    <div>
<div className="flex min-h-screen w-auto bg-gray-100 text-gray-900">
        {/* Sidebar */}
        <div className=" hidden lg:block w-1/5 bg-white shadow-md  flex-col  py-6">
          {/* Logo */}
          <h1 className="text-1xl  text-sm text-gray-500 mb-6 ml-4">MAIN MENU</h1>
          <ul className="w-full">
            {/* Menu Items */}
            <li className="flex items-center px-4 py-2 bg-blue-600 font-semibold">
              <Image
                src="/images/home.png" 
                alt="home Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Dashboard
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500">
              <Image
                src="/images/caricon.png"
                alt="Car Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Car Rent
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500">
              <Image
                src="/images/group.png"
                alt="group Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Insight
            </li>

            <li className="flex items-center px-4 py-2 text-gray-500">
              <Image
                src="/images/wallet.png"
                alt="wallet Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Reimburse
            </li>



            <li className="flex items-center px-4 py-2 text-gray-500">
              <Image
                src="/images/inbox.png"
                alt="inbox Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Inbox
            </li>

            <li className="flex items-center px-4 py-2 text-gray-500">
              <Image
                src="/images/calendar.png"
                alt="calendar Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Calender
            </li>
          </ul>


          {/* Logo */}
          
          <ul className=" mt-10 w-full">
            {/* Menu Items */}
            <li className="flex items-center text-gray-500 text-sm px-4 py-2  ">
             
            P R E F E R E N C E S
            </li>


            <li className="flex items-center px-4 py-2  text-gray-500">
              <Image
                src="/images/setting.png"
                alt="setting Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Settings
            </li>

            <li className="flex items-center px-4 py-2  text-gray-500">
              <Image
                src="/images/info-circle.png" 
                alt="info circle Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Help and Center
            </li>

            <li className="flex items-center px-4 py-2  text-gray-500">
              <Image
                src="/images/briefcase.png" 
                alt="briefcase Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              Dark Mode
              <Image
                src="/images/darkmode.png" 
                alt="home Icon"
                height={500}width={500}
                className="w-auto h-auto ml-2 mr-3"
              />
            </li>
            
                                {/* logout icon  */}
            
            <li className="flex items-center px-4 py-2  mt-20 font-semibold">
              <Image
                src="/images/logout.png" 
                alt="logout Icon"
                height={500}width={500}
                className="w-6 h-6 mr-3"
              />
              logout
            </li>
            
            </ul>


        </div>
  

    

                           {/* center div with map img */}


    
    <div className="p-6">
      
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row lg:gap-6">
        {/* Detail Rentals */}
        <div className="bg-white shadow-md rounded-lg p-6 lg:w-[534px] mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Detail Rentals</h2>
          <Image
            src="/images/maps.png"
            alt="Map"
            height={500}width={500}
            className="w-full h-auto object-contain rounded-lg mb-6"
          />

          {/* Car Section */}
          <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg mb-6">
            <div className="bg-blue-500 rounded-md">
              <Image
                src="/images/car2.png"
                alt="Car"
                height={500}width={500}
                className="w-28 h-16 rounded-lg mr-4 ml-2"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Nissan GTR</h3>
              <p className="text-gray-500">Sport Car</p>
            </div>
          </div>

          {/* Pick Up and Drop Off */}
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Pick Up</h4>
              <p className="text-sm text-gray-600">Thursday, 9 Dec 2021</p>
              <p className="text-sm text-gray-600">20:39</p>
              <p className="text-sm text-gray-600">San Francisco</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Drop Off</h4>
              <p className="text-sm text-gray-600">Friday, 10 Dec 2021</p>
              <p className="text-sm text-gray-600">12:00</p>
              <p className="text-sm text-gray-600">Los Angeles</p>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-700">
            Total Rental Price: <span className="text-blue-600">$80.00</span>
          </div>
        </div>

        {/* Top 5 Car Rental */}
        <div className="p-4 bg-gray-100 mb-6 lg:mb-0 lg:w-[30rem]">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Top 5 Car Rental</h2>
              <div className="text-gray-400 text-lg font-bold">...</div>
            </div>
                                
            <div className="flex items-start">
              <div className="relative flex items-center justify-center w-5/12">
                <Image
                  src="/images/chart.png"
                  alt="Chart"
                  height={500}width={500}
                  className="w-auto h-auto"
                />
                <div className="absolute text-center">
                  <p className="text-2xl font-bold text-gray-800">72,030</p>
                  <p className="text-sm text-gray-500">Rental Car</p>
                </div>
              </div>

              <div className="ml-6 w-7/12">
                <div className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                    <p className="text-gray-600">Sport Car</p>
                  </div>
                  <p className="text-gray-800 font-medium">17,439</p>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                    <p className="text-gray-600">SUV</p>
                  </div>
                  <p className="text-gray-800 font-medium">9,478</p>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-800 mr-2"></span>
                    <p className="text-gray-600">Coupe</p>
                  </div>
                  <p className="text-gray-800 font-medium">18,197</p>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-300 mr-2"></span>
                    <p className="text-gray-600">Hatchback</p>
                  </div>
                  <p className="text-gray-800 font-medium">12,510</p>
                </div>
                <div className="flex justify-between py-2">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-200 mr-2"></span>
                    <p className="text-gray-600">MPV</p>
                  </div>
                  <p className="text-gray-800 font-medium">14,406</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <span className="text-blue-500 cursor-pointer">View All</span>
            </div>

            <div className="flex justify-between items-center border-t py-4">
              <div className="flex items-center">
                <Image src="/images/car1.png" alt="Car 1"  height={500}width={500} className="w-20 h-12 rounded-md" />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Nissan GT-R</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">20 July</p>
                <p className="text-lg font-semibold text-gray-800">$80.00</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t py-4">
              <div className="flex items-center">
                <Image src="/images/car2.png" alt="Car 2" height={500}width={500} className="w-20 h-12 rounded-md" />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Koenigsegg</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">19 July</p>
                <p className="text-lg font-semibold text-gray-800">$99.00</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t py-4">
              <div className="flex items-center">
                <Image src="/images/car1.png" alt="Car 1"  height={500}width={500} className="w-20 h-12 rounded-md" />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Nissan GT-R</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">20 July</p>
                <p className="text-lg font-semibold text-gray-800">$80.00</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t py-4">
              <div className="flex items-center">
                <Image src="/images/car1.png" alt="Car 1"  height={500}width={500} className="w-20 h-12 rounded-md" />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Nissan GT-R</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">20 July</p>
                <p className="text-lg font-semibold text-gray-800">$80.00</p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t py-4">
              <div className="flex items-center">
                <Image src="/images/car1.png" alt="Car 1"  height={500}width={500} className="w-20 h-12 rounded-md" />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Nissan GT-R</h3>
                  <p className="text-sm text-gray-500">Sport Car</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">20 July</p>
                <p className="text-lg font-semibold text-gray-800">$80.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
</div>
       
      </div>
      </div>
    
  );
}