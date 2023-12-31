import React, { useEffect, useState } from "react";

const CurrentData = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const formattedTime = currentTime.toLocaleTimeString();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="end">
      <div className="timeData">
        <div className="time">{formattedTime}</div>
        <div className="date">Saturday 30 December 2023</div>
      </div>
      <div className="tem">19&deg;c</div>
    </div>
  );
};

export default CurrentData;
