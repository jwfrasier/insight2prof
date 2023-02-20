import { findWeatherData } from "./WeatherFormHelpers";
import { AddressForm } from "./types/AddressForm/AddressFormTypes";
import { GeocodingResponse } from "./types/Geocode/GeocodeTypes";

interface WeatherBarButtonProps {
  addressForm: AddressForm;
  setAddressForm: (params?: any) => void;
}

const WeatherBarButton = ({
  addressForm,
  setAddressForm,
}: WeatherBarButtonProps): JSX.Element => {
  return (
    <>
      <button
        onClick={(): Promise<GeocodingResponse> =>
          findWeatherData(addressForm, setAddressForm)
        }
        type="button"
        name="submit"
      >
        Find Weather
      </button>
    </>
  );
};

export default WeatherBarButton;
