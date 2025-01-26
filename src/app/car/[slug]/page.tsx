"use client";
import { useState, useEffect } from "react";
import { fetchCars } from "@/sanity/lib/query";
import CommentForm from "@/app/components/comment";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaPhone, FaStar, FaCar, FaClipboard } from "react-icons/fa";

interface Car {
  name: string;
  slug: { current: string };
  price: number;
  brand: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay :number,
  imageUrl: string;
  reviews?: { name: string; review: string }[];
}

const CarDetail = ({ params }: { params: { slug: string } }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carDetails, setCarDetails] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const fetchedCars: Car[] = await fetchCars();
        setCars(fetchedCars);

        const carDetails = fetchedCars.find((car) => car.slug.current === params.slug);
        if (carDetails) {
          setCarDetails(carDetails);
        }
      } catch {
        // In case of error, we can handle it with a generic loading state or fallback UI
        setCarDetails(null);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!carDetails) {
    return <div>Car not found</div>;
  }

  return (
    <div className="flex">
      {/* Dashboard */}
      <aside className="hidden md:block w-1/5 bg-gray-100 p-6 shadow-lg h-screen">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <ul className="space-y-4">
          <Link href='/'>
            <li className="flex items-center gap-2">
              <FaHome /> Home
            </li>
          </Link>
          <li className="flex items-center gap-2">
            <FaInfoCircle /> About
          </li>
          <li className="flex items-center gap-2">
            <FaPhone /> Contact
          </li>
          <li className="flex items-center gap-2">
            <FaStar /> Reviews
          </li>
          <li className="flex items-center gap-2">
            <FaCar /> Cars
          </li>
          <li className="flex items-center gap-2">
            <FaClipboard /> Documentation
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Div */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Sports car with the best design and acceleration</h1>
            <p className="text-gray-600 mb-6">
              Safety and comfort while driving a fascinating and elegant sports car.
            </p>
            <Image
              src={carDetails.imageUrl}
              alt={carDetails.name}
              width={500}
              height={300}
              className="rounded-lg object-cover mx-auto mb-6"
            />
          </div>

          {/* Right Div */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{carDetails.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <span className="text-gray-600">440+ reviewers</span>
            </div>
            <p className="text-gray-600 mb-6">
              Nismo has become the embodiment of Nissan outstanding performance inspired by the most unforgiving
              proving ground: the racetrack.
            </p>
            <div className="space-y-2">
              <p><strong>Brand:</strong> {carDetails.brand}</p>
              <p><strong>Fuel Capacity:</strong> {carDetails.fuelCapacity}L</p>
              <p><strong>Transmission:</strong> {carDetails.transmission}</p>
              <p><strong>Seats:</strong> {carDetails.seatingCapacity}</p>
             
             <p><strong>Price:</strong> ${carDetails.pricePerDay}</p>
             <div className="flex ">
              <Link href='/payment'> <button className="lg:ml-[12rem] ml-32 bg-blue-600 h-12 w-24 rounded-md text-white font-bold">Rent Now</button></Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Small Divs Below the Left Div (Horizontally Aligned and Smaller in Size) */}
        <div className="mt-6 flex flex-row sm:flex-row gap-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg hover:shadow-lg transition p-4 w-1/6"
            >
              <Image
                src={carDetails.imageUrl}
                alt={carDetails.name}
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        {/* Review Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
          <CommentForm carSlug={carDetails.slug.current} />
        </div>

        {/* More Cars Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">More Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars
              .filter((car) => car.slug.current !== params.slug)
              .map((car) => (
                <Link key={car.slug.current} href={`/car/${car.slug.current}`}>
                  <div className="bg-white border rounded-lg hover:shadow-lg transition p-4">
                    <h3 className="text-lg font-bold text-left">{car.name}</h3>
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover mb-2"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarDetail;