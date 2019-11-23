import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataCollection, ODataValue, ODataEntityResource } from 'angular-odata';

import { AirportLocation, AirportLocationSchema } from './airportlocation.interface';
import { Airport, AirportSchema } from './airport.interface';


@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  static path: string = 'Airports';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airport';
  
  // Actions
  
  // Functions
  public getNearestAirport(lat: number, lon: number, options?: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    withCredentials?: boolean
  }): Observable<Airport> {
    var body = Object.entries({ lat, lon })
      .filter(pair => pair[1] !== null)
      .reduce((acc, val) => (acc[val[0]] = val[1], acc), {});
    return this.client.function<Airport>('GetNearestAirport', body, 'Microsoft.OData.SampleService.Models.TripPin.Airport')
      .get({
        headers: options && options.headers,
        params: options && options.params,
        responseType: 'entity',
        reportProgress: options && options.reportProgress,
        withCredentials: options && options.withCredentials
      });
  }
  
  // Navigations
  
}