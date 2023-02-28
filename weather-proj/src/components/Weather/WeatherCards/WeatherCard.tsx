interface Forecast {
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
  low?: number;
  temperatureTrend: any;
  temperatureUnit: string;
  windDirection: string;
  windSpeed: string;
}

const WeatherCard = (period: Forecast): JSX.Element => {
  return (
    <div className="bg-white p-3 bg-opacity-80 rounded-3xl flex justify-between space-x-12 shadow-md items-center w-px-400">
      <div>
        <img className="rounded-lg" src={period.icon} alt="" />
      </div>
      <div>
        <p className="text-3xl font-bold text-right text-gray-900">
          {period.temperature}/{period.low} {period.temperatureUnit}°
        </p>

        <p className="text-gray-500 text-sm">{period.name}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
