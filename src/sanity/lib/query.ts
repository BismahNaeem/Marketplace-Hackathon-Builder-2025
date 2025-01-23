// lib/query.ts

import {client} from '@/sanity/lib/client'; // Import the Sanity client from the sanity.ts file

// Sanity query to fetch car data
const query = `*[_type == "car"] {
  _id,
  name,
  slug{current}, 
  brand,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  "imageUrl": image.asset->url
}`;

export const fetchCars = async () => {
  try {
    const cars = await client.fetch(query); // Fetch the data using the Sanity client
    return cars;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};