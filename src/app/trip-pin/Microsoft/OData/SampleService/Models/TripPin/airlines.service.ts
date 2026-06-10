import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { AirlineModel } from './airline.model';
import { AirlineCollection } from './airline.collection';
import { Airline } from './airline.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class AirlinesService extends ODataEntitySetService<Airline> {
  constructor(client: ODataClient) {
    super(client, 'Airlines', 'Microsoft.OData.SampleService.Models.TripPin.Airline');
  }
  airlineModel(entity?: Partial<Airline>) {
    return this.model<AirlineModel<Airline>>(entity);
  }
  airlineCollection(entities?: Partial<Airline>[]) {
    return this.collection<AirlineModel<Airline>, AirlineCollection<Airline, AirlineModel<Airline>>>(entities);
  }
// #region Custom
// #endregion Custom
}
