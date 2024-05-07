import Loading from "./Loading";
import useLocationWeather from "../hooks/useLocationWeather";
import { WeatherInfoProps } from "../../Type";

const CurrentWeatherInfo = ({ city }: WeatherInfoProps) => {
  const { loading, location, temperature } = useLocationWeather(city);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" p-4 flex flex-col items-center">
          {!city && <p className="mb-3 text-white">Current Location</p>}
          <h2 className="font-bold text-xl text-white border-b-4">
            {location?.name}, {location?.sys?.country}
          </h2>
          <div className="flex text-lg text-white">
            <h3>{temperature}</h3>
            <p>C°</p>
          </div>
          <img
            className="w-20 h-15"
            src={`http://openweathermap.org/img/wn/${location?.weather?.[0].icon}@2x.png`}
            alt=""
          />

          <p className="text-white">{location?.weather?.[0].description}</p>
          <div className="flex text-white">
            <p>Wind Speed: </p>
            <span className="ml-2"> {location?.wind?.speed} m/s</span>
          </div>
          <div className="flex text-white">
            <p>Clouds:</p>
            <span className="ml-2">{location?.clouds?.all}%</span>
          </div>

          <div className="flex text-white">
            <p>Pressure:</p>
            <span className="ml-2">{location?.main?.pressure} mb</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeatherInfo;
