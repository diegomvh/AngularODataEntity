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
import { EventLocation } from './event-location.complex';
import { EventLocationModel } from './event-location.model';
import { Location } from './location.complex';
import { LocationCollection } from './location.collection';
import { LocationModel } from './location.model';

export class EventLocationCollection<E extends EventLocation, M extends EventLocationModel<E>> extends LocationCollection<E, M> {
  
}
