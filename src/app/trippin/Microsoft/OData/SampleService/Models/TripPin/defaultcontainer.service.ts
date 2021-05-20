import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  HttpOptions,
  Expand,
  Select,
  ODataBaseService
} from 'angular-odata';

//#region ODataApi Imports
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class DefaultContainerService extends ODataBaseService {

  constructor(protected client: ODataClient) {
    super(client, 'DefaultContainerContainer', '');
  }

  //#region ODataApi Actions
  public resetDataSource(options?: HttpOptions) {
    return this.callAction<null, any>(
      null, 
      this.client.action<null, any>('Microsoft.OData.SampleService.Models.TripPin.ResetDataSource'), 
      'none', options);
  }
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(lat: number, lon: number, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{lat: number, lon: number}, Airport>(
      {lat, lon}, 
      this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport'), 
      'entity', {alias, ...options}) as Observable<Airport | null>;
  }
  //#endregion
}