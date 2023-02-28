import { AddressForm } from "./types/AddressForm/AddressFormTypes";

interface WeatherBarButtonProps {
  addressForm: AddressForm;
  setAddressForm: (params?: any) => void;
  points: (params?: any) => void;
}

const WeatherBarButton = ({ points }: WeatherBarButtonProps): JSX.Element => {
  return (
    <>
      <button onClick={points} type="button" name="submit">
        Find Weather
      </button>
    </>
  );
};

export default WeatherBarButton;
