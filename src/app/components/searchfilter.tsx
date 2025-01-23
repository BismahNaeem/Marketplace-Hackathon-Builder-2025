"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation
import { fetchCars } from "@/sanity/lib/query"; // Import fetchCars

const SearchFilter = () => {
  const [cars, setCars] = useState([]); // Store all cars
  const [filteredCars, setFilteredCars] = useState([]); // Filtered results
  const [searchTerm, setSearchTerm] = useState(""); // Search input value
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false); // Track search bar visibility

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

  // Handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter cars based on name
    const filtered = cars.filter((car: any) =>
      car.name.toLowerCase().includes(term)
    );
    setFilteredCars(filtered); // Update filtered results
  };

  // Handle click on a car result
  const handleCarClick = (slug: string) => {
    setIsSearchBarOpen(false); // Close the search bar after selecting a car
    router.push(`/car/${slug}`); // Navigate to the selected car's page
  };

  // Toggle search bar visibility
  const handleSearchIconClick = () => {
    setIsSearchBarOpen(!isSearchBarOpen); // Toggle search bar visibility
  };

  return (
    <div className="w-full">
      {/* Search Icon (toggle search bar visibility) */}
      <div
        className="cursor-pointer mb-4"
        onClick={handleSearchIconClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 18l6-6m0 0l-6-6m6 6H4"
          />
        </svg>
      </div>

      {/* Conditionally render the search bar if it's open */}
      {isSearchBarOpen && (
        <div>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />

          {/* Display Filtered Results */}
          <ul className="mt-4">
            {filteredCars.map((car: any) => (
              <li
                key={car.id}
                onClick={() => handleCarClick(car.slug.current)} // Navigate on click
                className="cursor-pointer border-b py-2 hover:bg-gray-100"
              >
                {car.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;