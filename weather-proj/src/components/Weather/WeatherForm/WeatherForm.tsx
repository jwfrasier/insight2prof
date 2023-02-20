import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import WeatherBarButton from "./WeatherBarButton";
import WeatherBarInput from "./WeatherBarInput";

type AddressForm = {
  streetName: string;
  streetNumber: string;
  zipcode: string;
};

const WeatherForm = (): JSX.Element => {
  const queryClient = useQueryClient();
  // const getWeatherQuery = useQuery("latlong");
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

export default WeatherForm;
