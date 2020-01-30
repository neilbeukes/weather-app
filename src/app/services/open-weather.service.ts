import { WeatherApiResponse, HourlyForecastApiResponse } from './../models/weather.model';
import { environment } from './../../environments/environment';
import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService{

  baseApi: string = "";
  apiKey: string = "";

  constructor(private httpClient: HttpClient) {
    this.baseApi = environment.baseApiEndpoint;
    this.apiKey = environment.apiKey;
   }

  /**
   * Returns weather information for the city
   * @param cityId 
   */
  getLocationWeather(cityId: number): Observable<WeatherApiResponse> {
    const url = `${this.baseApi}/weather?id=${cityId}`;
    return this.httpClient.get<WeatherApiResponse>(url);
  }

  /**
   * Returns weather forcast for the specified City, Hourly
   * @param location 
   */
  getLocationHourlyWeatherForecast(cityId: number): Observable<HourlyForecastApiResponse> {
    const url = `${this.baseApi}/forecast?id=${cityId}`;
    return this.httpClient.get<HourlyForecastApiResponse>(url);
  }
}
