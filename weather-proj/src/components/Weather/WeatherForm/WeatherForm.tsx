import { Query, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import WeatherCard from "../WeatherCards/WeatherCard";
import { getWeatherData } from "./queries";
import WeatherBarButton from "./WeatherBarButton";
import WeatherBarInput from "./WeatherBarInput";
import { findWeatherData } from "./WeatherFormHelpers";

export type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};

const WeatherForm = (): JSX.Element => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    streetName: "",
    streetNumber: "",
    zipcode: "",
  });

  const { data, refetch } = useQuery(
    ["grid"],
    () => findWeatherData(addressForm, setAddressForm),
    { enabled: false }
  );

  // const { data: forecast } = useQuery(
  //   ["forecast"],
  //   () => findWeatherData(addressForm, setAddressForm),
  //   { enabled: false }
  // );

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
      <WeatherCard data={data} />
    </div>
  );
};

export default WeatherForm;
