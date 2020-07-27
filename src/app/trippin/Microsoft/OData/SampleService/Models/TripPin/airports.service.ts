import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
import { Airport } from './airport.entity';
//#endregion

@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  static path: string = 'Airports';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airports';
  static entityType: string = 'Microsoft.OData.SampleService.Models.TripPin.Airport';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(lat: number, lon: number, options?: HttpOptions): Observable<[Airport, ODataEntityAnnotations]> {
    let args = {lat, lon}
    var res = this.client.function<Airport>('GetNearestAirport');
    return res.call(args, 'entity', options);
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
