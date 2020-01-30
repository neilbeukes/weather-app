import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {
  apiKey: string = "";

  constructor() {
    this.apiKey = environment.apiKey;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq: HttpRequest<any>;

    if (request.url.indexOf("api.openweathermap.org") === -1) {
      return next.handle(request); // do nothing
    }

    // If open Weather api call add our API key to the end of the request URL
    newReq = request.clone({
      url: `${request.url}&appid=${this.apiKey}`
    });

    return next.handle(newReq);
  }
}
