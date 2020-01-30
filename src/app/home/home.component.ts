import { OpenWeatherService } from "./../services/open-weather.service";
import {
  City,
  defaultCities,
  WeatherApiResponse,
  HourlyForecastApiResponse
} from "./../models/weather.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  cities: City[] = [];
  weatherData: WeatherApiResponse;
  hourlyForecastData: HourlyForecastApiResponse;
  error = false;

  constructor(private weatherService: OpenWeatherService) {
    this.cities = defaultCities;
  }

  ngOnInit() {
    // Get Johannesburg Weather as default startup City
    this.setLocationWeather(this.cities[0].id);
  }

  ngOnDestroy() {
    // Cleanup component by unsubscribing from all subscriptions
    this.subscriptions.unsubscribe();
  }

  /**
   * set current weather, hourly forecast and 5 day forecast for specified ID
   * @param id
   */
  setLocationWeather(id: number): void {
    this.subscriptions.add(
      this.weatherService.getLocationWeather(id).subscribe(
        (response: WeatherApiResponse) => {
          this.error = false;
          this.weatherData = response;
        },
        error => {
          console.log(
            "TCL: HomeComponent -> getLocationWeather -> error",
            error
          );
          this.error = true;
        }
      )
    );

    this.subscriptions.add(
      this.weatherService.getLocationHourlyWeatherForecast(id).subscribe(
        (response: HourlyForecastApiResponse) => {
          this.error = false;
          this.hourlyForecastData = response;
        },
        error => {
          console.log(
            "TCL: HomeComponent -> getLocationHourlyWeatherForecast -> error",
            error
          );
          this.error = true;
        }
      )
    );
  }
}
