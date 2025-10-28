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
import { AirportLocation } from './airport-location.complex';
import { AirportLocationModel } from './airport-location.model';
import { Location } from './location.complex';
import { LocationCollection } from './location.collection';
import { LocationModel } from './location.model';

export class AirportLocationCollection<E extends AirportLocation, M extends AirportLocationModel<E>> extends LocationCollection<E, M> {
  
}
