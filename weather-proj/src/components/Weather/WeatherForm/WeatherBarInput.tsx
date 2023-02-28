import { AddressForm } from "./types/AddressForm/AddressFormTypes";

interface WeatherBarInputProps {
  setAddressForm: (params: any) => void;
  addressForm: AddressForm;
  name: string;
  placeHolder?: string;
}

const WeatherBarInput = ({
  setAddressForm,
  addressForm,
  name,
  placeHolder,
}: WeatherBarInputProps): JSX.Element => {
  const value = addressForm[name as keyof typeof addressForm];
  return (
    <>
      <input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAddressForm({ ...addressForm, [name]: e.target.value })
        }
        className="m-1"
        type={name === "streetNumber" || name === "zipcode" ? "number" : "text"}
        name={name}
        placeholder={placeHolder}
      />
    </>
  );
};

export default WeatherBarInput;
