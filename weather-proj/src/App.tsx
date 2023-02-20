import { ReactElement } from "react";
import "./App.css";
import { WeatherBar } from "./components/WeatherBar";

const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherBar />
    </div>
  );
};

export default App;
