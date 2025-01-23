"use client";
import React from "react";
import { useWishlist } from "@/app/context/WishlistContext"; // Import the useWishlist hook

const DetailWishlistPage = () => {
  const { wishlist } = useWishlist(); // Get wishlist from context

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((car) => (
            <div
              key={car._id}
              className="p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <img
                src={car.imageUrl}
                alt={car.name}
                className="w-full h-56 object-contain rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{car.slug.current}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailWishlistPage;