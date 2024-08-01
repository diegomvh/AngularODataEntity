import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Airline } from './airline.entity';

@Injectable()
export class AirlinesService extends ODataEntitySetService<Airline> {
  constructor(client: ODataClient) {
    super(client, 'AirlinesService', 'Microsoft.OData.SampleService.Models.TripPin.Airline');
  }
  airlineModel(entity?: Partial<Airline>) {
    return this.model(entity);
  }
  airlineCollection(entities?: Partial<Airline>[]) {
    return this.collection(entities);
  }
}
