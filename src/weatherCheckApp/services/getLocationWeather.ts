import axios, { AxiosResponse, AxiosError } from "axios";

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

const getLocationWeather = async (URL_WEATHER: string, city: string, crd?: Coordinates): Promise<WeatherResponse> => {
  try {
    const currentLocation = crd ? `?lat=${crd.latitude}&lon=${crd.longitude}` : '';
    const isCity = city ? `&q=${city}` : '';
    const apiKey = 'b045d170d006915d39ea5fd5426971b8';
    const url = `${URL_WEATHER}${currentLocation}${isCity}&appid=${apiKey}`;
   
    const response: AxiosResponse = await axios.get(url);

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error: error
      };
    } else {
      return {
        success: false,
        error: undefined
      };
    }
  }
};

export default getLocationWeather;
