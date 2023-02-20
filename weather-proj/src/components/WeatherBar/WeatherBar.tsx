import { ReactElement, useState } from "react";
import { findWeatherData } from "./WeatherBarHelpers";

// const url = "https://geocoding.geo.census.gov/geocoder/locations/address?street=2509+Tupelo+Terrace&city=%20Tallahassee&state=FL&zip=32303&benchmark=Public_AR_Census2020&format=json"
type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};
const WeatherBar = (): ReactElement => {
  const [addressForm, setAddressForm] = useState<AddressForm>({
    streetName: "",
    streetNumber: "",
    zipcode: "",
  });
  return (
    <div>
      <input
        value={addressForm?.streetName}
        onChange={(e) =>
          setAddressForm({ ...addressForm, [e.target.name]: e.target.value })
        }
        type="text"
        name="streetName"
        placeholder="Enter in Street Name"
      />
      <input
        value={addressForm?.streetNumber}
        onChange={(e) =>
          setAddressForm({ ...addressForm, [e.target.name]: e.target.value })
        }
        type="text"
        name="streetNumber"
        placeholder="Enter in Street Number"
      />
      <input
        value={addressForm?.zipcode}
        onChange={(e) =>
          setAddressForm({ ...addressForm, [e.target.name]: e.target.value })
        }
        type="text"
        name="zipcode"
        placeholder="Enter in Zipcode"
      />
      <button
        onClick={() => findWeatherData(addressForm)}
        type="button"
        name="submit"
      >
        Find Weather
      </button>
    </div>
  );
};

export default WeatherBar;
