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
import { CustomerAndSuppliersByCity } from './customer-and-suppliers-by-city.entity';
import { CustomerAndSuppliersByCityModel } from './customer-and-suppliers-by-city.model';

// #region Custom
// #endregion Custom
export class CustomerAndSuppliersByCityCollection<E extends CustomerAndSuppliersByCity, M extends CustomerAndSuppliersByCityModel<E>> extends ODataCollection<E, M> {
  
// #region Custom
// #endregion Custom
}
