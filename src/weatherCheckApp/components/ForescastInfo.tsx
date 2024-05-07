import useLocationWeather from "../hooks/useLocationWeather";
import ForescastItem from "./ForescastItem";
import Loading from "./Loading";
interface CurrentWeatherInfoProps {
  city: string;
}

const ForescastInfo = ({ city }: CurrentWeatherInfoProps) => {
  const { loading, forescast } = useLocationWeather(city);
  // this for loop serves to display only a certain number of items
  const forecastItems =
    forescast && forescast.list && forescast.list.length >= 3
      ? forescast.list.slice(0, 3)
      : [];

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col lg:flex-wrap">
          {forecastItems.map((item, index) => (
            <ForescastItem
              key={index}
              temperature={item.main.temp}
              icon={item.weather[0].icon}
              description={item.weather[0].description}
              date={`${item.dt_txt.substring(8, 10)}/${item.dt_txt.substring(
                5,
                7
              )}/${item.dt_txt.substring(0, 4)} ${item.dt_txt.substring(
                11,
                16
              )}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ForescastInfo;
