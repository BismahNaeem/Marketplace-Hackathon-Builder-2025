"use client"
import { useEffect, useState } from 'react';
import { fetchCars } from '@/sanity/lib/query'; // Import the fetchCars function
import Link from 'next/link'; // Import Link from next/link
import { useWishlist } from '@/app/context/WishlistContext';
import { FaHeart } from 'react-icons/fa' // Import the useWishlist hook for managing the wishlist
import Herosection from "./components/herosection"

// Define the car interface (type)
interface Car {
  _id: string;
  name: string;
  brand: string;
  
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice: number;
  imageUrl: string;
  slug: {
    current: string;  // Ensure that 'current' is a string
  };
}

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]); // Store car data
  const { addToWishlist } = useWishlist(); // Use the addToWishlist function from the context
  const [favoritedCars, setFavoritedCars] = useState<Set<string>>(new Set()); // Track favorited cars

  // Fetch car data from the query file when the component mounts
  useEffect(() => {
    async function getCars() {
      const data = await fetchCars(); // Fetch the data
      setCars(data); // Set car data to state
    }

    getCars();
  }, []); // Empty dependency array to run only once

  const handleAddToWishlist = (car: Car) => {
    addToWishlist(car); // Add the car to the wishlist
  };

  const toggleFavorite = (carId: string) => {
    setFavoritedCars(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(carId)) {
        newFavorites.delete(carId); // Remove if already favorited
      } else {
        newFavorites.add(carId); // Add if not favorited
      }
      return newFavorites;
    });
  };

  return (
    <div>
      <Herosection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {cars.map((car) => (
          <div key={car._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center relative">
            {/* Heart Icon with Circular Background */}
            <div
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 cursor-pointer"
              onClick={() => {
                toggleFavorite(car._id);
                handleAddToWishlist(car);
              }}
            >
              <FaHeart 
                className={`text-2xl ${favoritedCars.has(car._id) ? 'text-red-500' : 'text-gray-500'}`} 
              />
            </div>

            {/* Car Name and Image */}
            <div className="flex flex-col items-start w-full mb-4">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <img
                src={car.imageUrl}
                alt={car.name}
                className="w-full h-48 object-contain rounded-lg"
              />
            </div>

            {/* Car Details */}
            <div className="flex flex-wrap  w-full mb-4">
              {/* Fuel Capacity, Transmission, and Seats aligned horizontally (on x-axis) */}
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <img src="/images/img1.png" alt="Fuel Capacity" className="w-5 h-5 mr-2" />
                  <p>{car.fuelCapacity}L</p>
                </div>
                <div className="flex items-center">
                  <img src="/images/img2.png" alt="Transmission" className="w-5 h-5 mr-2" />
                  <p>{car.transmission}</p>
                </div>
                <div className="flex items-center">
                  <img src="/images/img3.png" alt="Seating Capacity" className="w-5 h-5 mr-2" />
                  <p>{car.seatingCapacity}</p>
                </div>
              </div>
            </div>

            {/* Price and Button Section */}
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col items-start">
                <p className="font-bold ">Price Per Day: ${car.pricePerDay}</p>
                <p className="line-through text-gray-500">Original Price: ${car.originalPrice}</p>
              </div>
              
              {/* View Details Button */}
              <Link href={`/car/${car.slug.current}`}>
                <button className="mt-4 bg-blue-500 text-white h-10 w-32 rounded-md">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;