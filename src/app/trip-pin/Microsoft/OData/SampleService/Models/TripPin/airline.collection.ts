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
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';

export class AirlineCollection<E extends Airline, M extends AirlineModel<E>> extends ODataCollection<E, M> {
  
}
