import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperature' })
export class TempPipe implements PipeTransform {
  transform(temp: number) {
      // convert temperature from Farenheit to our local Temperature standard : degrees celcius
    return temp - 273.15;
  }
}