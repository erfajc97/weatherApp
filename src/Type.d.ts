import { ReactNode } from "react";
import { AxiosError } from "axios";

// Generic interfaces
interface WeatherInfoProps {
  city: string;
}

interface SearchCityProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

// Interface to error context
interface ErrorContextType {
  error: boolean;
  setError: (value: boolean) => void;
}

// Interface para las props de Children
interface ChildrenProps {
  children: ReactNode;
}

// Interface to location data
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
  list?: ForecastList[]; 
  success: boolean;
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

interface ForecastItemProps {
  date: string;
  temperature: number;
  description: string;
  icon: string;
}


// Interface tu services
interface Coordinates {
  latitude: number;
  longitude: number;
}

interface WeatherResponse {
  success: boolean;
  data?: unknown;
  status?: number | string;
  error?: AxiosError | undefined;
}
