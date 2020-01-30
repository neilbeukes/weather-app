interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainTemps {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface HourlyWeather {
  dt: number;
  main: MainTemps;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: { pod: string };
  dt_txt: string;
}

// Exported interfaces

export interface City {
  name: string;
  id: number;
  coord?: Coord;
  country?: string;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}

export interface WeatherApiResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: MainTemps;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface HourlyForecastApiResponse {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyWeather[];
  city: City;
}

export interface DayWeatherForecast{
  max: number;
  min: number;
  description: string;
  date: string;
  iconId: string;
}

export const defaultCities: City[] = [
  {
    name: "Johannesburg",
    id: 993800
  },
  {
    name: "Cape Town",
    id: 3369157
  },
  {
    name: "Windhoek",
    id: 3352136
  },
  {
    name: "New York",
    id: 5128581
  },
  {
    name: "Amsterdam",
    id: 2759794
  }
];
