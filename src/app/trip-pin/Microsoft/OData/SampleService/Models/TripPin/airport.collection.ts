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
import { Airport } from './airport.entity';
import { AirportModel } from './airport.model';
import { AirportLocation } from './airport-location.complex';
import { AirportLocationModel } from './airport-location.model';

export class AirportCollection<E extends Airport, M extends AirportModel<E>> extends ODataCollection<E, M> {
  
}
