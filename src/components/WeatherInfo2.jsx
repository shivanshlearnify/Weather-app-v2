import React from "react";

const WeatherInfo2 = ({
  searchedCity,
  country,
  Temperature,
  Humidity,
  Visiblity,
  WindSpeed,
}) => {
  return (
    <div className="searchedItem">
      <div className="searchedCity">{searchedCity? `${searchedCity} , `:"No Search value"}{country? country:""}</div>
      <div className="line2"></div>
      <div className="searchedData">
        <div className="Temperature">Temperature</div>
        <div className="data">{Temperature?`${Temperature}°C`:"null" }</div>
      </div>
      <div className="line2"></div>
      <div className="searchedData">
        <div className="Humidity">Humidity</div>
        <div className="data">{Humidity? `${Humidity}%`:"null"}</div>
      </div>
      <div className="line2"></div>
      <div className="searchedData">
        <div className="Visiblity">Visiblity</div>
        <div className="data">{Visiblity? `${Visiblity}m`:"null"}</div>
      </div>
      <div className="line2"></div>
      <div className="searchedData">
        <div className="WindSpeed">Wind Speed</div>
        <div className="data">{WindSpeed? `${WindSpeed}m/s`: "null"}</div>
      </div>
    </div>
  );
};

export default WeatherInfo2;
