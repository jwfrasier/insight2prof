import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AddressForm } from "../WeatherForm/types/AddressForm/AddressFormTypes";
import { Data } from "../WeatherForm/types/Geocode/GeocodeTypes";
import { Forecast } from "../WeatherForm/types/WeatherForecast/WeatherForecast";
import { findWeatherData } from "../WeatherForm/WeatherFormHelpers";
// interface WeatherCardProps {
//   data: Data[];
//   addressForm?: AddressForm;
//   setAddressForm?: (params: any) => void;
// }
const WeatherCard = (period: Forecast): JSX.Element => {
  return (
    <div className="temperature_card">
      {/* <img src={period.icon} alt="" /> */}
      <h3>{period.name}</h3>
      <h4>{period.temperature}</h4>
    </div>
  );
};

export default WeatherCard;
