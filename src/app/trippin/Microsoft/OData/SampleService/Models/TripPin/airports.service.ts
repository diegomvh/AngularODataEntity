import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.complex';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airportlocation.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class AirportsService extends ODataEntitySetService<Airport> {
  constructor(protected client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }
  //#region ODataApi Model
  airportModel(attrs?: Partial<Airport>): AirportModel<Airport> {
    return this.entity().asModel<AirportModel<Airport>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  airportCollection(models?: Partial<Airport>[]): AirportCollection<Airport, AirportModel<Airport>> {
    return this.entities().asCollection<AirportModel<Airport>, AirportCollection<Airport, AirportModel<Airport>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(): ODataFunctionResource<{lat: number, lon: number}, Airport> { 
    return this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport', this.apiNameOrEntityType);
  }
  public callGetNearestAirport(lat: number, lon: number, options?: HttpQueryOptions<Airport>) {
    return this.callFunction<{lat: number, lon: number}, Airport>(
      {lat, lon}, 
      this.getNearestAirport(), 
      'entity', options) as Observable<ODataEntity<Airport>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
