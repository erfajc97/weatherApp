import { LocationData } from "../../Type";
import getForescastWeather from "../services/getForescastWeather";
import {  URL_FORECAST } from "../url/urls";
import verifyResponse from "./verifyResponse";

  
// this function will get the forescast weather
const getForescastWeatherHelper = async (city: string = ""): Promise<LocationData | null> => {
  return new Promise((resolve, reject) => {
    async function success(pos: GeolocationPosition) {
      const crd = pos.coords;
      try {
        const response = await getForescastWeather(URL_FORECAST, city, crd);
        verifyResponse(
          response.success,
          // "Forescast weather loaded successfully"
        );
        resolve(response.data as unknown as LocationData);
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

export default getForescastWeatherHelper;
