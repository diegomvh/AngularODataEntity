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
import { ProductsByCategory } from './products-by-category.entity';
import { ProductsByCategoryModel } from './products-by-category.model';

export class ProductsByCategoryCollection<E extends ProductsByCategory, M extends ProductsByCategoryModel<E>> extends ODataCollection<E, M> {
  
}
