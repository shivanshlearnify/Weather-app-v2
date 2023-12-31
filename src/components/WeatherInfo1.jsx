import React from "react";

import { IoSunny } from "react-icons/io5";

const WeatherInfo1 = () => {
  return (
    <>
      <div className="weatherLogo">
        <IoSunny />
      </div>
      <div className="weatherCondition">Haze</div>
      <div className="line"></div>
    </>
  );
};

export default WeatherInfo1;
