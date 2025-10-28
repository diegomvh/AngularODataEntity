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
import { Location } from './location.complex';
import { LocationModel } from './location.model';
import { City } from './city.complex';
import { CityModel } from './city.model';

export class LocationCollection<E extends Location, M extends LocationModel<E>> extends ODataCollection<E, M> {
  
}
