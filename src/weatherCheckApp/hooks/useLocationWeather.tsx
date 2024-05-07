import { useContext, useEffect, useState } from "react";
import getCurrentLocationWeather from "../helpers/getCurrentLocationWeather";
import getForescastWeatherHelper from "../helpers/getForescastWeatherHelper";
import { ErrorContext } from "../context/ErrorContext";
const useLocationWeather = (city: string = "") => {
  const { setError } = useContext(ErrorContext);
  interface LocationData {
    main?: {
      temp: number;
      pressure: number;
    };
    name: string;
    sys?: {
      country: string;
    };
    weather?: {
      description: string;
      icon: string;
    }[];
    wind?: {
      speed: number;
    };
    clouds?: {
      all: number;
    };
    list: ForecastList[];
  }

  interface ForecastList {
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }

  const [location, setLocation] = useState<LocationData | null>(null);
  const [forescast, setForescast] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocationWeather();
    fetchForescastWeather();
  }, [city]);

  // this function will get the current location weather
  const fetchLocationWeather = async () => {
    setLoading(true);
    try {
      const response = await getCurrentLocationWeather(city);
      if (response !== null) {
        setLocation(response as unknown as LocationData);
        setError(response.success && response.success);
      }
    } catch (error) {
      console.error("Error fetching location weather:", error);
    } finally {
      setLoading(false);
    }
  };

  // this function will get the forescast weather
  const fetchForescastWeather = async () => {
    setLoading(true);
    try {
      const response = await getForescastWeatherHelper(city);
      setForescast(response as unknown as LocationData);
    } catch (error) {
      console.error("Error fetching location weather:", error);
    } finally {
      setLoading(false);
    }
  };
  // transform farhenheit to celsius
  const temperature =
    location && location.main && location.main.temp
      ? Math.round(location.main.temp - 273.15)
      : null;

  return { loading, temperature, location, forescast };
};

export default useLocationWeather;
