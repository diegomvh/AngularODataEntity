import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
import { Airport } from './airport.entity';
//#endregion

@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  constructor(protected client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(): ODataFunctionResource<{lat: number, lon: number}, Airport> {
    const resource = this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
