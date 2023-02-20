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
}: WeatherBarInputProps) => {
  const addressObj = addressForm;
  const field = name;
  const value = addressObj[field as keyof typeof addressObj];
  return (
    <>
      <input
        value={value}
        onChange={(e) =>
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
