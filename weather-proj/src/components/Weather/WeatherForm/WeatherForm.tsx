import { Query, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import WeatherCard from "../WeatherCards/WeatherCard";
import { getWeatherData } from "./queries";
import {
  Forecast,
  WeatherLatLong,
} from "./types/WeatherForecast/WeatherForecast";
import WeatherBarButton from "./WeatherBarButton";
import WeatherBarInput from "./WeatherBarInput";
import {
  findWeatherData,
  getWeatherForecast,
  getWeatherForecastUrl,
} from "./WeatherFormHelpers";

export type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};
const WeatherForm = (): JSX.Element => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    streetName: "mystic stone drive",
    streetNumber: "20915",
    zipcode: "77375",
  });

  const { data, refetch } = useQuery(
    ["grid"],
    () => findWeatherData(addressForm, setAddressForm),
    { enabled: false }
  );
  // const latLong = data[0]?.coordinates;
  // console.log({ latLong });
  const { data: forecastUrl } = useQuery(
    ["forecastUrl", data],
    () => getWeatherForecastUrl(data[0]?.coordinates),
    { enabled: !!data }
  );

  const { data: forecast } = useQuery(
    ["forecast", forecastUrl],
    () => getWeatherForecast(forecastUrl),
    { enabled: !!forecastUrl }
  );
  console.log({ forecast });
  return (
    <div>
      <WeatherBarInput
        addressForm={addressForm}
        setAddressForm={setAddressForm}
        name={"streetNumber"}
        placeHolder={"Enter Your Street Number"}
      />
      <WeatherBarInput
        addressForm={addressForm}
        setAddressForm={setAddressForm}
        name={"streetName"}
        placeHolder={"Enter Your Street Name"}
      />
      <WeatherBarInput
        addressForm={addressForm}
        setAddressForm={setAddressForm}
        name={"zipcode"}
        placeHolder={"Enter Your Zipcode"}
      />
      <WeatherBarButton
        points={refetch}
        addressForm={addressForm}
        setAddressForm={setAddressForm}
      />
      <div className="temperature_container">
        {forecast?.map((period: Forecast): JSX.Element => {
          return <WeatherCard {...period} />;
        })}
      </div>
    </div>
  );
};

export default WeatherForm;
