import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';
import { AirlineCollection } from './airline.collection';
//#endregion

@Injectable()
export class AirlinesService extends ODataEntitySetService<Airline> {
  constructor(protected client: ODataClient) {
    super(client, 'Airlines', 'Microsoft.OData.SampleService.Models.TripPin.Airline');
  }

  //#region ODataApi Model
  airlineModel(attrs?: Partial<Airline>): AirlineModel<Airline> {
    return this.entity().asModel(attrs || {}) as AirlineModel<Airline>;
  }
  //#endregion
  //#region ODataApi Collection
  airlineCollection(models?: Partial<Airline>[]): AirlineCollection<Airline, AirlineModel<Airline>> {
    return this.entities().asCollection(models || []) as AirlineCollection<Airline, AirlineModel<Airline>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
