import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
import { AirportLocation } from './airportlocation.entity';
import { Airport } from './airport.entity';
import { AirportLocationModel } from './airportlocation.model';
import { AirportModel } from './airport.model';
import { AirportLocationCollection } from './airportlocation.collection';
import { AirportCollection } from './airport.collection';
//#endregion

@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  constructor(protected client: ODataClient) {
    super(client, 'Airports', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
  }

  airportModel(): AirportModel<Airport> {
    return super.model() as AirportModel<Airport>;
  }
  
  airportCollection(): AirportCollection<Airport, AirportModel<Airport>> {
    return super.collection() as AirportCollection<Airport, AirportModel<Airport>>;
  }
}
