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
import { City } from './city.complex';
import { CityModel } from './city.model';

export class CityCollection<E extends City, M extends CityModel<E>> extends ODataCollection<E, M> {
  
}
