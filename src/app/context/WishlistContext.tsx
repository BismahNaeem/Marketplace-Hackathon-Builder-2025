"use client";
import React, { createContext, useContext, useState } from "react";

// Define the Car type
interface Car {
  _id: string;
  name: string;
  imageUrl: string;
  slug: { current: string };
}

// Define the Wishlist Context types
interface WishlistContextType {
  wishlist: Car[];
  addToWishlist: (car: Car) => void;
  removeFromWishlist: (slug: string) => void;
}

// Create the Wishlist Context
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Wishlist Provider component
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  const addToWishlist = (car: Car) => {
    if (!wishlist.some((item) => item.slug.current === car.slug.current)) {
      setWishlist([...wishlist, car]);
    }
  };

  const removeFromWishlist = (slug: string) => {
    setWishlist(wishlist.filter((item) => item.slug.current !== slug));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the Wishlist Context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};