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
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';
import { AirlineCollection } from './airline.collection';
//#endregion

@Injectable()
export class AirlinesService extends ODataEntityService<Airline> {
  constructor(protected client: ODataClient) {
    super(client, 'Airlines', 'Microsoft.OData.SampleService.Models.TripPin.Airline');
  }

  airlineModel(): AirlineModel<Airline> {
    return super.model() as AirlineModel<Airline>;
  }
  
  airlineCollection(): AirlineCollection<Airline, AirlineModel<Airline>> {
    return super.collection() as AirlineCollection<Airline, AirlineModel<Airline>>;
  }
}
