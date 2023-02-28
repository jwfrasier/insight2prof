import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import "./App.css";
import { WeatherForm } from "./components/Weather/WeatherForm";
import { Toaster } from "react-hot-toast";

const App = (): ReactElement => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error: any, query: any) => {
        toast.error(`Something went wrong: ${error.message}`);
      },
    }),
  });
  return (
    <div className="App">
      <h1>Weather App</h1>
      <QueryClientProvider client={queryClient}>
        <WeatherForm />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
};

export default App;
