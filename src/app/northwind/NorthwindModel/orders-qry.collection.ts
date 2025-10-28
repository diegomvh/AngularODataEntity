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
import { OrdersQry } from './orders-qry.entity';
import { OrdersQryModel } from './orders-qry.model';

export class OrdersQryCollection<E extends OrdersQry, M extends OrdersQryModel<E>> extends ODataCollection<E, M> {
  
}
