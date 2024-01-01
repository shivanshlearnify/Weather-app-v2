const API = "d064627dfb810fd067d5be2d911909fa";

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    );
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
