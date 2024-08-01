import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Airport } from './airport.entity';

@Injectable()
export class AirportsService extends ODataEntitySetService<Airport> {
  constructor(client: ODataClient) {
    super(client, 'AirportsService', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }
  airportModel(entity?: Partial<Airport>) {
    return this.model(entity);
  }
  airportCollection(entities?: Partial<Airport>[]) {
    return this.collection(entities);
  }
}
