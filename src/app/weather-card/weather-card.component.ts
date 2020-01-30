import { WeatherIconService } from "./../services/weather-icon.service";
import {
  WeatherApiResponse,
  HourlyForecastApiResponse,
  DayWeatherForecast
} from "./../models/weather.model";
import { Component, OnInit, Input } from "@angular/core";
import { ThemeService } from "ng2-charts";
import { ChartOptions } from "chart.js";
import * as moment from "moment";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"]
})
export class WeatherCardComponent implements OnInit {
  weatherData: WeatherApiResponse = null;
  todaysDate: string;
  forecastDays: DayWeatherForecast[];

  @Input() error = false;

  @Input("weatherData") set _weatherData(data: WeatherApiResponse) {
    if (data) {
      this.weatherData = data;
      this.todaysDate = moment.unix(data.dt).format("MM/DD/YYYY");
    }
  }

  @Input("hourlyForecastData") set _hourlyForecastData(
    data: HourlyForecastApiResponse
  ) {
    if (data) {
      this.lineChartData = this.getLineChartData(data);
      this.lineChartLabels = this.getLineChartLabels(data);
      this.forecastDays = this.getFourDayForecast(data);
      this.labelMFL[0].data = this.lineChartData;
    }
  }

  // ---- chart data variables
  lineChartData: number[];
  lineChartLabels: string[];
  ChartType = "line";
  labelMFL: any[] = [{ data: this.lineChartData, label: "Temperature in °C" }];
  chartColors: any[] = [
    {
      backgroundColor: [
        "#4FC3F7",
        "#4FC3F7",
        "#4FC3F7",
        "#4FC3F7",
        "#4FC3F7",
        "#4FC3F7"
      ]
    }
  ];
  lineChartOptions: any = {
    responsive: false,
    plugins: {
      datalabels: {
        display: true,
        align: "top",
        anchor: "end",
        color: "white",
      },
      deferred: false
    }
  };
  // End of chart data variables

  constructor(
    private themeService: ThemeService,
    public iconService: WeatherIconService
  ) {}

  ngOnInit() {
    this.setGraphTheme();
  }

  /**
   * set the theme of the graph
   */
  setGraphTheme(): void {
    let overrides: ChartOptions;
    overrides = {
      legend: {
        labels: { fontColor: "white" }
      },
      scales: {
        xAxes: [
          {
            ticks: { fontColor: "white" },
            gridLines: { color: "rgba(255,255,255,0.1)" }
          }
        ],
        yAxes: [
          {
            ticks: { fontColor: "white" },
            gridLines: { color: "rgba(255,255,255,0.1)" }
          }
        ]
      }
    };

    this.themeService.setColorschemesOptions(overrides);
  }

  /**
   * return the temperatures of the next 15 hours to display on the graph
   * @param data: HourlyForecastApiResponse
   * @returs number[]
   */
  getLineChartData(data: HourlyForecastApiResponse): number[] {
    let tempArray: number[] = [];
    for (let item of data.list) {
      tempArray.push(Math.round(item.main.temp - 273.15));
      if (tempArray.length === 5) {
        break;
      }
    }
    return tempArray;
  }

  /**
   * return the labels to the next 5, 3-hour intervals to display on the graph
   * @param data: HourlyForecastApiResponse
   * @returns string[]
   */
  getLineChartLabels(data: HourlyForecastApiResponse): string[] {
    let tempArray: string[] = [];
    for (let item of data.list) {
      tempArray.push(item.dt_txt.split(" ")[1].slice(0, length - 3));
      if (tempArray.length === 5) {
        break;
      }
    }
    return tempArray;
  }

  /**
   * Calculate 5 day forecast from the free API.
   * Have to calculate averages as the API call that provide this functionality is only on Paid accounts.
   * @param data: HourlyForecastApiResponse
   * @returns DayWeatherForecast[]
   */
  getFourDayForecast(data: HourlyForecastApiResponse): DayWeatherForecast[] {
    let tempArray: DayWeatherForecast[] = [];
    let max = 0,
      min = 400;
    let counter = 0;
    let description = "";
    let icon = "";

    for (let item of data.list) {
      if (!moment.unix(item.dt).isSame(moment(), "day")) {
        max = max < item.main.temp ? item.main.temp : max;
        min = min > item.main.temp ? item.main.temp : min;
        description = counter === 4 ? item.weather[0].description : description;
        icon = counter === 4 ? item.weather[0].icon : icon;
        counter++;
        if (counter === 8) {
          tempArray.push({
            max: max,
            min: min,
            description: description,
            date: moment.unix(item.dt).format("MM/DD"),
            iconId: icon
          });
          counter = 0;
          min = 400;
          max = 0;
          description = "";
        }
        if (tempArray.length === 4) {
          break;
        }
      }
    }
    return tempArray;
  }
}
