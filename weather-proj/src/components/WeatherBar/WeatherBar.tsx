import { ReactElement } from "react";
interface StudentProps {
  name: string;
}
const WeatherBar = (): ReactElement => {
  return (
    <div>
      <input type="text" placeholder="Enter in Street Number" />
      <input type="text" placeholder="Enter in Street Name" />
      <input type="text" placeholder="Enter in Zipcode" />
    </div>
  );
};

export default WeatherBar;
