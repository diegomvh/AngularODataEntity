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
import { CurrentProductList } from './current-product-list.entity';
import { CurrentProductListModel } from './current-product-list.model';

export class CurrentProductListCollection<E extends CurrentProductList, M extends CurrentProductListModel<E>> extends ODataCollection<E, M> {
  
}
