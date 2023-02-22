import { useQuery, QueryKey } from "@tanstack/react-query";
import { AddressForm } from "./WeatherForm";
import { findWeatherData } from "./WeatherFormHelpers";

export const getWeatherData = (
  addressForm: AddressForm,
  setAddressForm: any
) => {
  return useQuery({
    queryKey: ["weather", addressForm.zipcode] as QueryKey,
    queryFn: () => findWeatherData(addressForm, setAddressForm),
    enabled: false,
  });
};
