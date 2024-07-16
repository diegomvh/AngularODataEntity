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
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';
import { AirlineCollection } from './airline.collection';
//#endregion

@Injectable()
export class AirlinesService extends ODataEntitySetService<Airline> {
  constructor(client: ODataClient) {
    super(client, 'Airlines', 'Microsoft.OData.SampleService.Models.TripPin.Airline');
  }
  //#region ODataApiGen Model
  airlineModel(entity?: Partial<Airline>): AirlineModel<Airline> {
    return this.entity().asModel<AirlineModel<Airline>>(entity);
  }//#endregion
  //#region ODataApiGen Collection
  airlineCollection(entities?: Partial<Airline>[]): AirlineCollection<Airline, AirlineModel<Airline>> {
    return this.entities().asCollection<AirlineModel<Airline>, AirlineCollection<Airline, AirlineModel<Airline>>>(entities);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
