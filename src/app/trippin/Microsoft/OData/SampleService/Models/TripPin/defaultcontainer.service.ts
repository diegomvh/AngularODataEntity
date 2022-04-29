import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
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
  ODataBaseService
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class DefaultContainerService extends ODataBaseService {

  constructor(client: ODataClient) {
    super(client, 'DefaultContainerContainer', 'TripPin');
  }

  //#region ODataApiGen Actions
  public resetDataSource(): ODataActionResource<null, any> { 
    return this.client.action<null, any>('Microsoft.OData.SampleService.Models.TripPin.ResetDataSource', this.apiNameOrEntityType);
  }
  public callResetDataSource(options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.resetDataSource(), 
      'none', options);
  }
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
}