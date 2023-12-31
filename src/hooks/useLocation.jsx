import React, { useEffect, useState } from "react";

const useLocation = () => {
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  useEffect(() => {
    function getUserLocation() {
      // Check if Geolocation is supported by the browser
      if (navigator.geolocation) {
        // Get the user's current position
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Call the function to get city and country based on coordinates
            getCityAndCountry(latitude, longitude);
          },
          (error) => {
            console.error("Error getting user location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }

    // Function to get city and country based on coordinates
    async function getCityAndCountry(latitude, longitude) {
      try {
        const response = await fetch(
          `https://geocode.xyz/${latitude},${longitude}?json=1`
        );
        const data = await response.json();

        // Extract city and country from the response
        setCity(data.city);
        setCountry(data.country);
      } catch (error) {
        console.error("Error fetching city and country:", error);
      }
    }

    // Call the function to get the user's location
    getUserLocation();
  }, []);
  return { city, country };
};

export default useLocation;
