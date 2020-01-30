import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeatherIconService {
  /**
   * Returns src url for target icon
   * @param id
   */
  getIcon(id: string): string {
    return `assets/weather-icons/${id}.svg`;
  }
}
