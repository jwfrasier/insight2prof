import { ReactElement, useState } from "react";
import WeatherBarButton from "./WeatherBarButton";
import WeatherBarInput from "./WeatherBarInput";

// const url = "https://geocoding.geo.census.gov/geocoder/locations/address?street=2509+Tupelo+Terrace&city=%20Tallahassee&state=FL&zip=32303&benchmark=Public_AR_Census2020&format=json"
type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};

const WeatherBar = (): JSX.Element => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    streetName: "",
    streetNumber: "",
    zipcode: "",
  });
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
        addressForm={addressForm}
        setAddressForm={setAddressForm}
      />
    </div>
  );
};

export default WeatherBar;
