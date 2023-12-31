import React, { useEffect, useState } from "react";

const CurrentData = () => {
  const [currentData, setCurrentData] = useState(new Date());

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedTime = currentData.toLocaleTimeString();
  const formattedDate = currentData.toLocaleDateString(undefined, options);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentData(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="end">
      <div className="timeData">
        <div className="time">{formattedTime}</div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="tem">19&deg;c</div>
    </div>
  );
};

export default CurrentData;
