import { findWeatherData } from "../components/Weather/WeatherForm/WeatherFormHelpers";

type Todo = {
  title: string;
};
const firstTodo: Todo = { title: "Todo 1" };
const secondTodo: Todo = { title: "Todo 2" };
const todos: Todo[] = [firstTodo, secondTodo];
global["fetch"] = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(todos),
  })
);

describe("findWeatherData", () => {
  const setAddressForm = jest.fn();

  it("throws an error if streetName is empty", async () => {
    const addressForm = {
      streetName: "",
      streetNumber: "123",
      zipcode: "12345",
    };

    await expect(findWeatherData(addressForm, setAddressForm)).rejects.toThrow(
      "Please enter a Street Name"
    );
  });

  it("throws an error if zipcode is empty", async () => {
    const addressForm = {
      streetName: "Main St",
      streetNumber: "123",
      zipcode: "",
    };

    await expect(findWeatherData(addressForm, setAddressForm)).rejects.toThrow(
      "Please enter a zipcode"
    );
  });

  it("throws an error if streetNumber is empty", async () => {
    const addressForm = {
      streetName: "Main St",
      streetNumber: "",
      zipcode: "12345",
    };

    await expect(findWeatherData(addressForm, setAddressForm)).rejects.toThrow(
      "Please enter a Street Number"
    );
  });

  it("calls setAddressForm with initialState", async () => {
    const addressForm = {
      streetName: "Main St",
      streetNumber: "123",
      zipcode: "12345",
    };

    await findWeatherData(addressForm, setAddressForm);

    expect(setAddressForm).toHaveBeenCalledWith({
      streetName: "",
      streetNumber: "",
      zipcode: "",
    });
  });
});
