import "./App.css";
import { ImSearch } from "react-icons/im";
import CurrentLocation from "./components/CurrentLocation";
import CurrentData from "./components/CurrentData";
import WeatherInfo1 from "./components/WeatherInfo1";
import WeatherInfo2 from "./components/WeatherInfo2";
import useLocation from "./hooks/useLocation";
import usefetchedData from "./hooks/usefetchedData";
import { useEffect, useRef, useState } from "react";

function App() {
  const searchedCity = useRef();
  const { city, country } = useLocation();
  const [data, setData] = useState({});

  const handleSearchClick = async () => {
    const API = "d064627dfb810fd067d5be2d911909fa";
    const cityValue = searchedCity.current.value;

    try {
      if (cityValue) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API}&units=metric`
        );
        const newData = await response.json();
        setData(newData);
        console.log(newData);
      }
    } catch (error) {
      console.log(error);
    }
    searchedCity.current.value = "";
  };

  return (
    <div>
      <div className="container">
        <div className="right">
          <CurrentLocation city={city} country={country} />
          <CurrentData />
        </div>
        <div className="left">
          <WeatherInfo1 />
          <div className="inputBox">
            <div>
              <input
                type="text"
                placeholder="Search any city"
                ref={searchedCity}
              />
            </div>
            <div className="searchIcon" onClick={handleSearchClick}>
              <ImSearch />
            </div>
          </div>
          <WeatherInfo2
            searchedCity={data?.name}
            country={data?.sys?.country}
            Temperature={Math.round(data?.main?.temp)}
            Humidity={data?.main?.humidity}
            Visiblity={data?.visibility}
            WindSpeed={data?.wind?.speed}
          />
        </div>
      </div>
      <div className="footer">
        Devloped by Shivansh | Technology used React
      </div>
    </div>
  );
}

export default App;
