type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};

export const findWeatherData = async (
  addressForm: AddressForm
): Promise<AddressForm[]> => {
  return [{ streetName: "string", streetNumber: "string", zipcode: "string" }];
};
