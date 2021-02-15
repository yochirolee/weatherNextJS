import axios from "axios";
import { API_KEY, API_URL } from "./config";

export const getCityWeather = async (city) => {
  try {
    // fetch data from a url endpoint
    const data = await axios.get(API_URL, {
      params: {
        appid: API_KEY,
        q: city,
        units: "metric",
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const getCityForecastWeather = async (city, cnt) => {
  try {
    // fetch data from a url endpoint
    const data = await axios.get(API_URL_FORECAST, {
      params: {
        appid: API_KEY,
        q: city,
        units: "metric",
        cnt: 3,
      },
    });
    return data;
  } catch (error) {
    return error;
    // appropriately handle the error
  }
};
