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
import { SalesByCategory } from './sales-by-category.entity';
import { SalesByCategoryModel } from './sales-by-category.model';

export class SalesByCategoryCollection<E extends SalesByCategory, M extends SalesByCategoryModel<E>> extends ODataCollection<E, M> {
  
}
