import { TestBed } from '@angular/core/testing';

import { WeatherIconService } from './weather-icon.service';

describe('WeatherIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherIconService = TestBed.get(WeatherIconService);
    expect(service).toBeTruthy();
  });

  it('should return icon directory path', () => {
    const service: WeatherIconService = TestBed.get(WeatherIconService);
    expect(service.getIcon('testid')).toEqual('assets/weather-icons/testid.svg')
  })
});
