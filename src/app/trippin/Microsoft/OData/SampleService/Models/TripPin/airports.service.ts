import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
//#endregion

@Injectable()
export class AirportsService extends ODataEntitySetService<Airport> {
  constructor(protected client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public getNearestAirport(): ODataFunctionResource<{lat: number, lon: number}, Airport> { 
    return this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport', this.apiNameOrEntityType);
  }
  public callGetNearestAirport(lat: number, lon: number, options?: ODataQueryArgumentsOptions<Airport>) {
    return this.callFunction<{lat: number, lon: number}, Airport>(
      {lat, lon}, 
      this.getNearestAirport(), 
      'entity', options) as Observable<ODataEntity<Airport>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
