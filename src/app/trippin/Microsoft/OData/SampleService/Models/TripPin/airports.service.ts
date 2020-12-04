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
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airportlocation.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  constructor(protected client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }

  //#region ODataApi Model
  airportModel(attrs?: Partial<Airport>): AirportModel<Airport> {
    return this.entity().asModel(attrs || {}) as AirportModel<Airport>;
  }
  //#endregion
  //#region ODataApi Collection
  airportCollection(models?: Partial<Airport>[]): AirportCollection<Airport, AirportModel<Airport>> {
    return this.entities().asCollection(models || []) as AirportCollection<Airport, AirportModel<Airport>>;
  }
  //#endregion
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
