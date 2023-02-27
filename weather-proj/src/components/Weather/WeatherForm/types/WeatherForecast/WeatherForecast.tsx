export type WeatherLatLong = {
  x: number;
  y: number;
};

export interface Forecast {
  detailedForecast: string;
  dewpoint: {
    unitCode: string;
    value: number;
  };
  endTime: string;
  icon: string;
  isDaytime: boolean;
  name: string;
  number: number;
  probabilityOfPrecipitation: {
    unitCode: string;
    value: number | null;
  };
  relativeHumidity: {
    unitCode: string;
    value: number;
  };
  shortForecast: string;
  startTime: string;
  temperature: number;
  temperatureTrend: any;
  temperatureUnit: string;
  windDirection: string;
  windSpeed: string;
}
