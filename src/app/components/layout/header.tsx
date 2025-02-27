"use client";
import Image from "next/image";
import { AlignJustify } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext"; // Access wishlist context
import Link from "next/link"; // Import Link for navigation
import { useState, useEffect } from "react"; // For state and effect hooks
import { useRouter } from "next/navigation"; // For navigation
import { fetchCars } from "@/sanity/lib/query"; // Import fetchCars
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define the Car type based on your data structure
type Car = {
  id: string;
  name: string;
  slug: {
    current: string;
  };
};

const Header = () => {
  const { wishlist } = useWishlist(); // Get wishlist data
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state
  const [cars, setCars] = useState<Car[]>([]); // All cars state with proper typing
  const [filteredCars, setFilteredCars] = useState<Car[]>([]); // Filtered cars state with proper typing
  const [noResultsFound, setNoResultsFound] = useState<boolean>(false); // State to track no result found

  const router = useRouter(); // For navigation

  // Fetch car data on component mount
  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      setCars(data); // Set car data in state
      setFilteredCars(data); // Default to all cars
    };

    getCars();
  }, []);

  // Filter cars based on the query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCars(cars); // If search query is empty, show all cars
      setNoResultsFound(false); // Reset no results found
    } else {
      const filtered = cars.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(filtered); // Update filtered results

      // Check if no results found and update the state
      setNoResultsFound(filtered.length === 0);
    }
  }, [searchQuery, cars]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update search query
  };

  // Handle click on a car result
  const handleCarClick = (slug: string) => {
    router.push(`/car/${slug}`); // Navigate to car details page
    setSearchQuery(''); // Clear search query after selection
  };

  // Function to close the sheet when clicking on a link inside the sheet
  const closeSheet = () => {
    const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
    sheet?.click(); // This simulates the closing of the sheet by clicking the open state trigger
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 h-auto md:h-[60px] shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-[#3563e9] text-2xl font-bold mt-2 md:mt-0">MORENT</h1>

      {/* For Small Screens */}
      <div className="md:hidden flex flex-col items-center w-full bg-white mt-2 relative">
        {/* Icons Centered */}
        <div className="flex gap-x-3 justify-center mb-3">
          <Link href="/WishListDetailPage">
            <div className="relative flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
              <Image src="/images/heart.png" alt="Heart" height={20} width={20} />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center text-xs text-gray-100 bg-red-600 rounded-full h-5 w-5">
                  {wishlist.length}
                </span>
              )}
            </div>
          </Link>
          <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
            <Image src="/images/notification.png" alt="Notification" height={20} width={20} />
          </div>
          <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
            <Image src="/images/settings.png" alt="Settings" height={30} width={30} />
          </div>
          <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
            <Image src="/images/profil.png" alt="Profile" height={24} width={24} className="w-full" />
          </div>
        </div>

        {/* Search Bar with Cars Filter */}
        <div className="flex items-center justify-between border border-gray-300 rounded-full px-3 h-12 w-[95%] mx-auto bg-white relative">
          <Image src="/images/searchicon.png" alt="Search" height={100} width={100} className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-2 bg-transparent text-sm text-gray-500"
          />
          <Image src="/images/filter.png" alt="Filter" height={100} width={100} className="w-4 h-4" />
          {filteredCars.length > 0 && searchQuery && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 max-h-48 overflow-y-auto z-10">
              {filteredCars.map((car) => (
                <li
                  key={car.id}
                  onClick={() => handleCarClick(car.slug.current)}
                  className="cursor-pointer border-b py-2 px-3 hover:bg-gray-100"
                >
                  {car.name}
                </li>
              ))}
            </ul>
          )}
          {noResultsFound && searchQuery && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 py-2 text-center text-gray-500">
              No result found
            </div>
          )}
        </div>

        {/* Mobile Menu Sheet */}
        <Sheet>
          <SheetTrigger className="absolute right-4 top-2 md:hidden">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-white w-[90%] max-w-xs">
            <h1 className="text-blue-600 font-bold ml-4">RENTAL CAR WEBSITE</h1>
            <div className="flex-col text-blue-600">
              <p className="mt-4 font-semibold">
                <Link href="/" onClick={closeSheet}>Home page</Link>
              </p>
              <p className="mt-4 font-semibold">
                <Link href="/lastpage" onClick={closeSheet}>Rental Details</Link>
              </p>
              <p className="mt-4 font-semibold">
                <Link href="/payment" onClick={closeSheet}>Booking Details</Link>
              </p>
            </div>

            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Search Bar for Larger Screens */}
      <div className="hidden md:flex items-center w-full max-w-md border border-gray-300 rounded-full px-3 h-10 relative">
        <Image src="/images/searchicon.png" alt="Search" height={100} width={100} className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search cars..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-grow bg-transparent text-gray-500 pl-3"
        />
        <Image src="/images/filter.png" alt="Filter" height={100} width={100} className="w-5 h-5" />
        {filteredCars.length > 0 && searchQuery && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 max-h-48 overflow-y-auto z-10">
            {filteredCars.map((car) => (
              <li
                key={car.id}
                onClick={() => handleCarClick(car.slug.current)}
                className="cursor-pointer border-b py-2 px-3 hover:bg-gray-100"
              >
                {car.name}
              </li>
            ))}
          </ul>
        )}
        {noResultsFound && searchQuery && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 py-2 text-center text-gray-500">
            No result found
          </div>
        )}
      </div>

      {/* Right-Side Icons for Larger Screens */}
      <div className="hidden md:flex gap-x-3">
        <Link href="/WishListDetailPage">
          <div className="relative flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
            <Image src="/images/heart.png" alt="Heart" height={20} width={20} />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center text-xs text-gray-100 bg-red-600 rounded-full h-5 w-5">
                {wishlist.length}
              </span>
            )}
          </div>
        </Link>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/notification.png" alt="Notification" height={20} width={20} />
        </div>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/settings.png" alt="Settings" height={30} width={30} />
        </div>
        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-full h-8 w-8">
          <Image src="/images/profil.png" alt="Profile" height={24} width={24} className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;