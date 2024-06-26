import { LocationData } from "../../Type";
import getLocationWeather from "../services/getLocationWeather";
import { URL_WEATHER } from "../url/urls";
import verifyResponse from "./verifyResponse";

// this function will get the current location weather
const getCurrentLocationWeather = async (city: string = ""): Promise<LocationData | null> => {
  
  return new Promise((resolve, reject) => {
    async function success(pos: GeolocationPosition) {
      const crd = pos.coords;
      try {
        const response = await getLocationWeather(URL_WEATHER, city, crd);
        verifyResponse(
          response.success,
          // "Current location weather loaded successfully"
        );
        resolve({...response.data as unknown as LocationData, success:response.success});
      } catch (error) {
        reject(error);
      }
    }

    function error(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      reject(err);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  });
};

export default getCurrentLocationWeather;
