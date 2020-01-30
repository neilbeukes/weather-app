export const mockWeatherApiResponse = {
  coord: { lon: 18.42, lat: -33.93 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: 295.27,
    feels_like: 293.04,
    temp_min: 293.71,
    temp_max: 296.48,
    pressure: 1013,
    humidity: 49
  },
  visibility: 10000,
  wind: { speed: 3.6, deg: 200 },
  clouds: { all: 0 },
  dt: 1580368338,
  sys: {
    type: 1,
    id: 1899,
    message: 1,
    country: "ZA",
    sunrise: 1580357109,
    sunset: 1580406820
  },
  timezone: 7200,
  id: 3369157,
  name: "Cape Town",
  cod: 200
};

export const mockWeatherForecastApiResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1580374800,
      main: {
        temp: 301.1,
        feels_like: 300.84,
        temp_min: 298.08,
        temp_max: 301.1,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1004,
        humidity: 40,
        temp_kf: 3.02
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.74, deg: 180 },
      sys: { pod: "d" },
      dt_txt: "2020-01-30 09:00:00"
    },
    {
      dt: 1580385600,
      main: {
        temp: 303.08,
        feels_like: 302.23,
        temp_min: 300.82,
        temp_max: 303.08,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1003,
        humidity: 41,
        temp_kf: 2.26
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.64, deg: 174 },
      sys: { pod: "d" },
      dt_txt: "2020-01-30 12:00:00"
    },
    {
      dt: 1580396400,
      main: {
        temp: 300.99,
        feels_like: 300.69,
        temp_min: 299.48,
        temp_max: 300.99,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1002,
        humidity: 50,
        temp_kf: 1.51
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.52, deg: 179 },
      sys: { pod: "d" },
      dt_txt: "2020-01-30 15:00:00"
    },
    {
      dt: 1580407200,
      main: {
        temp: 296.44,
        feels_like: 296.24,
        temp_min: 295.69,
        temp_max: 296.44,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1001,
        humidity: 66,
        temp_kf: 0.75
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.44, deg: 188 },
      sys: { pod: "n" },
      dt_txt: "2020-01-30 18:00:00"
    },
    {
      dt: 1580418000,
      main: {
        temp: 294.18,
        feels_like: 293.33,
        temp_min: 294.18,
        temp_max: 294.18,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1002,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.93, deg: 184 },
      sys: { pod: "n" },
      dt_txt: "2020-01-30 21:00:00"
    },
    {
      dt: 1580428800,
      main: {
        temp: 292.44,
        feels_like: 292.27,
        temp_min: 292.44,
        temp_max: 292.44,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1001,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 17 },
      wind: { speed: 3.16, deg: 184 },
      sys: { pod: "n" },
      dt_txt: "2020-01-31 00:00:00"
    },
    {
      dt: 1580439600,
      main: {
        temp: 291.68,
        feels_like: 291.19,
        temp_min: 291.68,
        temp_max: 291.68,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1002,
        humidity: 90,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 24 },
      wind: { speed: 4.02, deg: 178 },
      sys: { pod: "n" },
      dt_txt: "2020-01-31 03:00:00"
    },
    {
      dt: 1580450400,
      main: {
        temp: 292.86,
        feels_like: 291.38,
        temp_min: 292.86,
        temp_max: 292.86,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1005,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 56 },
      wind: { speed: 5.26, deg: 170 },
      sys: { pod: "d" },
      dt_txt: "2020-01-31 06:00:00"
    },
    {
      dt: 1580461200,
      main: {
        temp: 295.19,
        feels_like: 293.44,
        temp_min: 295.19,
        temp_max: 295.19,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1007,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 97 },
      wind: { speed: 5.38, deg: 178 },
      sys: { pod: "d" },
      dt_txt: "2020-01-31 09:00:00"
    },
    {
      dt: 1580472000,
      main: {
        temp: 295.73,
        feels_like: 292.19,
        temp_min: 295.73,
        temp_max: 295.73,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1007,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 98 },
      wind: { speed: 7.32, deg: 177 },
      sys: { pod: "d" },
      dt_txt: "2020-01-31 12:00:00"
    },
    {
      dt: 1580482800,
      main: {
        temp: 294.43,
        feels_like: 290.12,
        temp_min: 294.43,
        temp_max: 294.43,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1007,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 67 },
      wind: { speed: 8.17, deg: 171 },
      sys: { pod: "d" },
      dt_txt: "2020-01-31 15:00:00"
    },
    {
      dt: 1580493600,
      main: {
        temp: 292.18,
        feels_like: 288.04,
        temp_min: 292.18,
        temp_max: 292.18,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1007,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 58 },
      wind: { speed: 7.86, deg: 167 },
      sys: { pod: "n" },
      dt_txt: "2020-01-31 18:00:00"
    },
    {
      dt: 1580504400,
      main: {
        temp: 291.61,
        feels_like: 287.21,
        temp_min: 291.61,
        temp_max: 291.61,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1007,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" }
      ],
      clouds: { all: 100 },
      wind: { speed: 8.16, deg: 164 },
      sys: { pod: "n" },
      dt_txt: "2020-01-31 21:00:00"
    },
    {
      dt: 1580515200,
      main: {
        temp: 291.23,
        feels_like: 288.32,
        temp_min: 291.23,
        temp_max: 291.23,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1006,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
      ],
      clouds: { all: 53 },
      wind: { speed: 6.15, deg: 159 },
      sys: { pod: "n" },
      dt_txt: "2020-02-01 00:00:00"
    },
    {
      dt: 1580526000,
      main: {
        temp: 290.66,
        feels_like: 289.16,
        temp_min: 290.66,
        temp_max: 290.66,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1005,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.05, deg: 161 },
      sys: { pod: "n" },
      dt_txt: "2020-02-01 03:00:00"
    },
    {
      dt: 1580536800,
      main: {
        temp: 291.76,
        feels_like: 290.28,
        temp_min: 291.76,
        temp_max: 291.76,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1006,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 16 },
      wind: { speed: 3.86, deg: 162 },
      sys: { pod: "d" },
      dt_txt: "2020-02-01 06:00:00"
    },
    {
      dt: 1580547600,
      main: {
        temp: 295.17,
        feels_like: 293.46,
        temp_min: 295.17,
        temp_max: 295.17,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1007,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 4.07, deg: 175 },
      sys: { pod: "d" },
      dt_txt: "2020-02-01 09:00:00"
    },
    {
      dt: 1580558400,
      main: {
        temp: 296.23,
        feels_like: 293.65,
        temp_min: 296.23,
        temp_max: 296.23,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      clouds: { all: 100 },
      wind: { speed: 5.8, deg: 176 },
      sys: { pod: "d" },
      dt_txt: "2020-02-01 12:00:00"
    },
    {
      dt: 1580569200,
      main: {
        temp: 295.26,
        feels_like: 292.09,
        temp_min: 295.26,
        temp_max: 295.26,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1004,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 24 },
      wind: { speed: 6.95, deg: 178 },
      sys: { pod: "d" },
      dt_txt: "2020-02-01 15:00:00"
    },
    {
      dt: 1580580000,
      main: {
        temp: 293.62,
        feels_like: 290.32,
        temp_min: 293.62,
        temp_max: 293.62,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1005,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 12 },
      wind: { speed: 7.6, deg: 175 },
      sys: { pod: "n" },
      dt_txt: "2020-02-01 18:00:00"
    },
    {
      dt: 1580590800,
      main: {
        temp: 293.26,
        feels_like: 291.9,
        temp_min: 293.26,
        temp_max: 293.26,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1006,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.75, deg: 167 },
      sys: { pod: "n" },
      dt_txt: "2020-02-01 21:00:00"
    },
    {
      dt: 1580601600,
      main: {
        temp: 292.38,
        feels_like: 292,
        temp_min: 292.38,
        temp_max: 292.38,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1005,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.43, deg: 165 },
      sys: { pod: "n" },
      dt_txt: "2020-02-02 00:00:00"
    },
    {
      dt: 1580612400,
      main: {
        temp: 292.11,
        feels_like: 292.39,
        temp_min: 292.11,
        temp_max: 292.11,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1005,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.44, deg: 164 },
      sys: { pod: "n" },
      dt_txt: "2020-02-02 03:00:00"
    },
    {
      dt: 1580623200,
      main: {
        temp: 293.73,
        feels_like: 294.3,
        temp_min: 293.73,
        temp_max: 293.73,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1006,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 16 },
      wind: { speed: 1.91, deg: 170 },
      sys: { pod: "d" },
      dt_txt: "2020-02-02 06:00:00"
    },
    {
      dt: 1580634000,
      main: {
        temp: 297.78,
        feels_like: 298.27,
        temp_min: 297.78,
        temp_max: 297.78,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1006,
        humidity: 58,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: { all: 33 },
      wind: { speed: 2.03, deg: 189 },
      sys: { pod: "d" },
      dt_txt: "2020-02-02 09:00:00"
    },
    {
      dt: 1580644800,
      main: {
        temp: 299.8,
        feels_like: 299.46,
        temp_min: 299.8,
        temp_max: 299.8,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1005,
        humidity: 55,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 17 },
      wind: { speed: 3.8, deg: 177 },
      sys: { pod: "d" },
      dt_txt: "2020-02-02 12:00:00"
    },
    {
      dt: 1580655600,
      main: {
        temp: 300.03,
        feels_like: 299.62,
        temp_min: 300.03,
        temp_max: 300.03,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1003,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 0 },
      wind: { speed: 4.36, deg: 184 },
      sys: { pod: "d" },
      dt_txt: "2020-02-02 15:00:00"
    },
    {
      dt: 1580666400,
      main: {
        temp: 297.7,
        feels_like: 297.99,
        temp_min: 297.7,
        temp_max: 297.7,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1003,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.59, deg: 174 },
      sys: { pod: "n" },
      dt_txt: "2020-02-02 18:00:00"
    },
    {
      dt: 1580677200,
      main: {
        temp: 295.75,
        feels_like: 296.3,
        temp_min: 295.75,
        temp_max: 295.75,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1004,
        humidity: 75,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 3.17, deg: 162 },
      sys: { pod: "n" },
      dt_txt: "2020-02-02 21:00:00"
    },
    {
      dt: 1580688000,
      main: {
        temp: 295.19,
        feels_like: 296.69,
        temp_min: 295.19,
        temp_max: 295.19,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1003,
        humidity: 76,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.61, deg: 140 },
      sys: { pod: "n" },
      dt_txt: "2020-02-03 00:00:00"
    },
    {
      dt: 1580698800,
      main: {
        temp: 294.59,
        feels_like: 296.7,
        temp_min: 294.59,
        temp_max: 294.59,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1002,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.64, deg: 118 },
      sys: { pod: "n" },
      dt_txt: "2020-02-03 03:00:00"
    },
    {
      dt: 1580709600,
      main: {
        temp: 296.43,
        feels_like: 298.21,
        temp_min: 296.43,
        temp_max: 296.43,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1004,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 14 },
      wind: { speed: 1.01, deg: 333 },
      sys: { pod: "d" },
      dt_txt: "2020-02-03 06:00:00"
    },
    {
      dt: 1580720400,
      main: {
        temp: 300.43,
        feels_like: 301.34,
        temp_min: 300.43,
        temp_max: 300.43,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1004,
        humidity: 52,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: { all: 1 },
      wind: { speed: 1.84, deg: 300 },
      sys: { pod: "d" },
      dt_txt: "2020-02-03 09:00:00"
    },
    {
      dt: 1580731200,
      main: {
        temp: 302.47,
        feels_like: 303.19,
        temp_min: 302.47,
        temp_max: 302.47,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 43,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: { all: 28 },
      wind: { speed: 1.5, deg: 206 },
      sys: { pod: "d" },
      dt_txt: "2020-02-03 12:00:00"
    },
    {
      dt: 1580742000,
      main: {
        temp: 300.33,
        feels_like: 300.36,
        temp_min: 300.33,
        temp_max: 300.33,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1001,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      clouds: { all: 24 },
      wind: { speed: 2.54, deg: 182 },
      sys: { pod: "d" },
      dt_txt: "2020-02-03 15:00:00"
    },
    {
      dt: 1580752800,
      main: {
        temp: 296.93,
        feels_like: 297.52,
        temp_min: 296.93,
        temp_max: 296.93,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1001,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      clouds: { all: 12 },
      wind: { speed: 2.71, deg: 150 },
      sys: { pod: "n" },
      dt_txt: "2020-02-03 18:00:00"
    },
    {
      dt: 1580763600,
      main: {
        temp: 296.3,
        feels_like: 298.22,
        temp_min: 296.3,
        temp_max: 296.3,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1002,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 1, deg: 185 },
      sys: { pod: "n" },
      dt_txt: "2020-02-03 21:00:00"
    },
    {
      dt: 1580774400,
      main: {
        temp: 294.7,
        feels_like: 294.45,
        temp_min: 294.7,
        temp_max: 294.7,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1002,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      clouds: { all: 0 },
      wind: { speed: 2.86, deg: 325 },
      sys: { pod: "n" },
      dt_txt: "2020-02-04 00:00:00"
    },
    {
      dt: 1580785200,
      main: {
        temp: 292.65,
        feels_like: 292.56,
        temp_min: 292.65,
        temp_max: 292.65,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1002,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      clouds: { all: 34 },
      wind: { speed: 3.15, deg: 345 },
      sys: { pod: "n" },
      dt_txt: "2020-02-04 03:00:00"
    },
    {
      dt: 1580796000,
      main: {
        temp: 293.75,
        feels_like: 293.09,
        temp_min: 293.75,
        temp_max: 293.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1003,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: { all: 68 },
      wind: { speed: 4.02, deg: 346 },
      sys: { pod: "d" },
      dt_txt: "2020-02-04 06:00:00"
    }
  ],
  city: {
    id: 3369157,
    name: "Cape Town",
    coord: { lat: -33.9258, lon: 18.4232 },
    country: "ZA",
    timezone: 7200,
    sunrise: 1580357109,
    sunset: 1580406819
  }
};
