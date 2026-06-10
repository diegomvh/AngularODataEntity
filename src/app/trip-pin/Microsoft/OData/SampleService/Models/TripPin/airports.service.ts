import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { AirportModel } from './airport.model';
import { AirportCollection } from './airport.collection';
import { Airport } from './airport.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class AirportsService extends ODataEntitySetService<Airport> {
  constructor(client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }
  airportModel(entity?: Partial<Airport>) {
    return this.model<AirportModel<Airport>>(entity);
  }
  airportCollection(entities?: Partial<Airport>[]) {
    return this.collection<AirportModel<Airport>, AirportCollection<Airport, AirportModel<Airport>>>(entities);
  }
// #region Custom
// #endregion Custom
}
