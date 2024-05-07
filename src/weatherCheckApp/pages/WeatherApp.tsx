import { useContext, useState } from "react";
import CurrentWeatherInfo from "../components/CurrentWeatherInfo";
import SearchCity from "../components/SearchCity";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForescastInfo from "../components/ForescastInfo";
import { ErrorContext } from "../context/ErrorContext";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const { error } = useContext(ErrorContext);
  return (
    <div>
      <SearchCity setCity={setCity} />
      <div className="flex gap-10 flex-col lg:flex-row items-center justify-center">
        <div
          className={`${
            city === "" || !error ? "hidden" : "block"
          } mt-3 items-center flex flex-col lg:flex-row border-2 rounded-md shadow-lg shadow-black `}
        >
          <CurrentWeatherInfo city={city} />
          <ForescastInfo city={city} />
        </div>
        <div className=" mt-3 items-center flex flex-col lg:flex-row border-2 rounded-md shadow-lg shadow-black">
          <CurrentWeatherInfo city="" />
          <ForescastInfo city="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WeatherApp;
