import { ForecastItemProps } from "../../Type";

const ForescastItem: React.FC<ForecastItemProps> = ({
  date,
  temperature,
  description,
  icon,
}) => {
  return (
    <div className=" p-2 flex flex-col items-center shadow-lg shadow-black m-5">
      <p className="text-lg text-white">{date}</p>
      <div className="flex text-lg text-white">
        <p>{temperature && (temperature - 273.15).toFixed(1)}</p>
        <span className="ml-2">C°</span>
      </div>
      <img
        className="w-20 h-15"
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt=""
      />

      <p className="text-white">{description}</p>
    </div>
  );
};

export default ForescastItem;
