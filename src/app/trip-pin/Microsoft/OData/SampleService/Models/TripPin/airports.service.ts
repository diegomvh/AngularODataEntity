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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AirportLocation } from './airport-location.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airport-location.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airport-location.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class AirportsService extends ODataEntitySetService<Airport> {
  constructor(client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }
  //#region ODataApiGen Model
  airportModel(entity?: Partial<Airport>): AirportModel<Airport> {
    return this.entity().asModel<AirportModel<Airport>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  airportCollection(entities?: Partial<Airport>[]): AirportCollection<Airport, AirportModel<Airport>> {
    return this.entities().asCollection<AirportModel<Airport>, AirportCollection<Airport, AirportModel<Airport>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public getNearestAirport(): ODataFunctionResource<{lat: number, lon: number}, Airport> { 
    return this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport', this.apiNameOrEntityType);
  }
  public callGetNearestAirport(lat: number, lon: number, options?: ODataFunctionOptions<Airport>) {
    return this.callFunction<{lat: number, lon: number}, Airport>(
      {lat, lon}, 
      this.getNearestAirport(), 
      'entity', options) as Observable<ODataEntity<Airport>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
