import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataClient, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, HttpOptions } from 'angular-odata';

import { AirportMeta } from './Microsoft/OData/SampleService/Models/TripPin/airport.meta';
import { Airport } from './Microsoft/OData/SampleService/Models/TripPin/airport.entity';
import { AirportsService } from './Microsoft/OData/SampleService/Models/TripPin/airports.service';


@Injectable()
export class TripPinService {
 
  constructor(protected client: ODataClient) { }

  // Actions
  public resetDataSource(options?: HttpOptions): Observable<[any, ODataEntityAnnotations]> {
    let args = null;
    var res = this.client.action<any>('ResetDataSource', '');
    return res.call(args, 'entity', options);
  }
  
  // Functions
  public getNearestAirport(lat: number, lon: number, options?: HttpOptions): Observable<[Airport, ODataEntityAnnotations]> {
    let args = Object.entries({ lat, lon })
      .filter(pair => pair[1] !== null)
      .reduce((acc, val) => (acc[val[0]] = val[1], acc), {});
    var res = this.client.function<Airport>('GetNearestAirport', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
    return res.call(args, 'entity', options);
  }
  
}