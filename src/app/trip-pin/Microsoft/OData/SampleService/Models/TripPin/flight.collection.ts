import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';
import { Flight } from './flight.entity';
import { FlightModel } from './flight.model';
import { PublicTransportation } from './public-transportation.entity';
import { PublicTransportationCollection } from './public-transportation.collection';
import { PublicTransportationModel } from './public-transportation.model';
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';

export class FlightCollection<E extends Flight, M extends FlightModel<E>> extends PublicTransportationCollection<E, M> {
  
}
