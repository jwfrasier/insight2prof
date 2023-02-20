import { findWeatherData } from "./WeatherFormHelpers";

type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};

interface WeatherBarButtonProps {
  addressForm: AddressForm;
}

const WeatherBarButton = ({ addressForm }: WeatherBarButtonProps) => {
  return (
    <>
      <button
        onClick={() => findWeatherData(addressForm)}
        type="button"
        name="submit"
      >
        Find Weather
      </button>
    </>
  );
};

export default WeatherBarButton;
