import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactElement } from "react";
import "./App.css";
import { WeatherForm } from "./components/Weather/WeatherForm";

const App = (): ReactElement => {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <h1>Weather App</h1>
      <QueryClientProvider client={queryClient}>
        <WeatherForm />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
