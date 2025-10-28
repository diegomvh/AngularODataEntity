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
import { CategorySalesFor1997 } from './category-sales-for-1997.entity';
import { CategorySalesFor1997Model } from './category-sales-for-1997.model';

export class CategorySalesFor1997Collection<E extends CategorySalesFor1997, M extends CategorySalesFor1997Model<E>> extends ODataCollection<E, M> {
  
}
