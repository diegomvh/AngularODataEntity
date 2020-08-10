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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class DefaultContainerService {
 
  constructor(protected client: ODataClient) { }

  //#region ODataApi Actions
  public resetDataSource(): ODataActionResource<null, any> {
    const resource = this.client.action<null, any>('Microsoft.OData.SampleService.Models.TripPin.ResetDataSource');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(): ODataFunctionResource<{lat: number, lon: number}, Airport> {
    const resource = this.client.function<{lat: number, lon: number}, Airport>('Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport');
    return resource;
  }
  //#endregion
}