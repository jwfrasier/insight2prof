type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};

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
        type="text"
        name={name}
        placeholder={placeHolder}
      />
    </>
  );
};

export default WeatherBarInput;
