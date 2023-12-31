import React, { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import { getWeatherData } from "../api";

const CurrentData = () => {
  const [currentData, setCurrentData] = useState(new Date());
  const [data, setData] = useState({});
  const { city } = useLocation();

  const fetchData = async () => {
    try {
      if (city) {
        const newData = await getWeatherData(city);
        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentData(new Date());
    }, 1000);

    fetchData(); // Call the fetchData function to get weather data initially

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [city]); // Trigger the effect when the city changes

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedTime = currentData.toLocaleTimeString();
  const formattedDate = currentData.toLocaleDateString(undefined, options);

  return (
    <div className="end">
      <div className="timeData">
        <div className="time">{formattedTime}</div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="tem">19&deg;C</div>
    </div>
  );
};

export default CurrentData;
