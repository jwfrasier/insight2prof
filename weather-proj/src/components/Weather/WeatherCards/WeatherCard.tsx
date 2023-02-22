import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AddressForm } from "../WeatherForm/types/AddressForm/AddressFormTypes";
import { Data } from "../WeatherForm/types/Geocode/GeocodeTypes";
import { findWeatherData } from "../WeatherForm/WeatherFormHelpers";
// interface WeatherCardProps {
//   data: Data[];
//   addressForm?: AddressForm;
//   setAddressForm?: (params: any) => void;
// }
const WeatherCard = ({ data }): JSX.Element => {
  return (
    <div>
      {/* {data?.map((stuff: Data) => (
        <p>{stuff.addressComponents.zip}</p>
      ))} */}
    </div>
  );
};

export default WeatherCard;
