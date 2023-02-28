const BASE_URL: string = "http://localhost:3033/get_weather";
const GEOCODE_URL: string =
  "https://geocoding.geo.census.gov/geocoder/locations/address?";
import { AddressForm } from "./types/AddressForm/AddressFormTypes";
import {
  Forecast,
  WeatherLatLong,
} from "./types/WeatherForecast/WeatherForecast";

const formatWeatherReqURL = (url: string, formData: AddressForm): string => {
  const { streetName, streetNumber, zipcode } = formData;
  const city: string = ""; // leave empty
  const state: string = ""; // leave empty
  const formattedSt = streetName.split(" ").join("+");

  const benchmark: string = "Public_AR_Census2020";
  const format: string = "json";
  const street: string = `${streetNumber}+${formattedSt}`;
  const zip: string = zipcode;

  const formattedURL: string = `${url}street=${street}&city=${city}&state=${state}&zip=${zip}&benchmark=${benchmark}&format=${format}`;

  return formattedURL;
};

export const findWeatherData = async (
  addressForm: AddressForm,
  setAddressForm: (params: any) => void
) => {
  const initialState: AddressForm = {
    streetName: "",
    streetNumber: "",
    zipcode: "",
  };

  const newURL: string = formatWeatherReqURL(GEOCODE_URL, addressForm);

  const body = {
    url: newURL,
  };
  setAddressForm(initialState);
  const response: Response = await fetch(BASE_URL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  });
  const json = await response.json();

  return json;
};

export const getWeatherForecastUrl = async (latLong: WeatherLatLong) => {
  const BASE_WEATHER_URL = `https://api.weather.gov/points/${latLong.y},${latLong.x}`;
  const weatherURL = await fetch(BASE_WEATHER_URL);
  const json = await weatherURL.json();
  return json?.properties?.forecast;
};

export const getWeatherForecast = async (url: string): Promise<Forecast[]> => {
  const getWeather = await fetch(url);
  const json = await getWeather.json();
  const formattedPeriods = combineObjects(json?.properties?.periods);
  return formattedPeriods;
};
const combineObjects = (data: Forecast[]): Forecast[] => {
  const result: Forecast[] = [];

  for (let i = 0; i < data.length; i += 2) {
    if (i + 1 < data.length) {
      const combinedObject: Forecast = {
        ...data[i],
        low: data[i + 1].temperature,
      };
      result.push(combinedObject);
    } else {
      result.push(data[i]);
    }
  }

  return result;
};
