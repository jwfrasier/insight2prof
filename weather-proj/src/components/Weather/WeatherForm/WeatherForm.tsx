import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import WeatherCard from "../WeatherCards/WeatherCard";
import { Forecast } from "./types/WeatherForecast/WeatherForecast";
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

  return (
    <div>
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
      </div>
      <div className="m-2">
        <WeatherBarButton
          points={refetch}
          addressForm={addressForm}
          setAddressForm={setAddressForm}
        />
      </div>
      <div className=" h-px-660 grid grid-rows-4 grid-cols-4 gap-4 ">
        {forecast?.map((period: Forecast): JSX.Element => {
          return <WeatherCard {...period} />;
        })}
      </div>
    </div>
  );
};

export default WeatherForm;
