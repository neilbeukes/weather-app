import { mockWeatherForecastApiResponse } from "./../../assets/test/weather-mock-responses";
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

import { WeatherCardComponent } from "./weather-card.component";

describe("WeatherCardComponent", () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCardComponent, TempPipe],
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a number array with correct values converted to degrees", () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    const forecast = component.getLineChartData(mockWeatherForecastApiResponse);
    expect(forecast).toEqual([28, 30, 28, 23, 21]);
  });

  it("should return a string array with correct labels", () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    const forecast = component.getLineChartLabels(
      mockWeatherForecastApiResponse
    );
    expect(forecast).toEqual(["09:00", "12:00", "15:00", "18:00", "21:00"]);
  });

  it("should return an object array of length 4", () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    const forecast = component.getFourDayForecast(
      mockWeatherForecastApiResponse
    );
    expect(forecast.length).toBe(4);
  });

  it("should return a DayWeatherForecast[] with correct values", () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    const forecast = component.getFourDayForecast(
      mockWeatherForecastApiResponse
    );
    expect(forecast).toEqual([
      {
        max: 295.73,
        min: 291.61,
        description: "overcast clouds",
        date: "01/31",
        iconId: "04d"
      },
      {
        max: 296.23,
        min: 290.66,
        description: "overcast clouds",
        date: "02/01",
        iconId: "04d"
      },
      {
        max: 300.03,
        min: 292.11,
        description: "few clouds",
        date: "02/02",
        iconId: "02d"
      },
      {
        max: 302.47,
        min: 294.59,
        description: "scattered clouds",
        date: "02/03",
        iconId: "03d"
      }
    ]);
  });
});
