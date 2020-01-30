import { mockWeatherApiResponse, mockWeatherForecastApiResponse } from "./../../assets/test/weather-mock-responses";
import { WeatherApiResponse, HourlyForecastApiResponse } from "./../models/weather.model";
import { TestBed, async } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { OpenWeatherService } from "./open-weather.service";

describe("OpenWeatherService", () => {
  let httpTestingController: HttpTestingController;
  let service: OpenWeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [OpenWeatherService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(OpenWeatherService);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });

  it('returned observable should contain correct WeatherData', () => {
    const mockWeatherData = mockWeatherApiResponse;

    service.getLocationWeather(1)
      .subscribe((data: WeatherApiResponse) => {
        expect(data).toEqual(mockWeatherApiResponse);
      });

    const req = httpTestingController.expectOne(
        { method: 'GET', url:'http://api.openweathermap.org/data/2.5/weather?id=1' });

    req.flush(mockWeatherData);
  });

  it('returned observable should contain correct Weather Forecast Data', () => {
    const mockWeatherData = mockWeatherForecastApiResponse;

    service.getLocationHourlyWeatherForecast(1)
      .subscribe((data: HourlyForecastApiResponse) => {
        expect(data).toEqual(mockWeatherForecastApiResponse);
      });

    const req = httpTestingController.expectOne(
        { method: 'GET', url:'http://api.openweathermap.org/data/2.5/forecast?id=1' });

    req.flush(mockWeatherData);
  });
});
