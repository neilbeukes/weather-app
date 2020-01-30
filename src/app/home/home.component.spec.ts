import { OpenWeatherService } from "./../services/open-weather.service";
import { Observable, of } from "rxjs";
import {
  WeatherApiResponse,
  HourlyForecastApiResponse
} from "./../models/weather.model";
import {
  mockWeatherApiResponse,
  mockWeatherForecastApiResponse
} from "./../../assets/test/weather-mock-responses";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ChartsModule } from "ng2-charts";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { TempPipe } from "./../pipes/temperature.pipe";
import { WeatherCardComponent } from "./../weather-card/weather-card.component";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, WeatherCardComponent, TempPipe],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Material Components
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatListModule,

        ChartsModule
      ]
    })
      .overrideComponent(HomeComponent, {
        set: {
          providers: [
            { provide: OpenWeatherService, useClass: MockWeatherService }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set weatherData variable for selected location", () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.setLocationWeather(123);
    jasmine.clock().tick(100);
    expect(component.weatherData).toEqual(mockWeatherApiResponse);
  });

  it("should set hourlyForecastData variable for selected location", () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.setLocationWeather(123);
    jasmine.clock().tick(100);
    expect(component.hourlyForecastData).toEqual(mockWeatherForecastApiResponse);
  });

  /**
   * Mock service for getting weather information from OpenWeather
   */
  class MockWeatherService {
    weatherApiResponse = mockWeatherApiResponse;
    weatherForecastApiResponse = mockWeatherForecastApiResponse;

    getLocationWeather(cityId: number): Observable<WeatherApiResponse> {
      return of(this.weatherApiResponse);
    }

    getLocationHourlyWeatherForecast(
      cityId: number
    ): Observable<HourlyForecastApiResponse> {
      return of(this.weatherForecastApiResponse);
    }
  }
});
