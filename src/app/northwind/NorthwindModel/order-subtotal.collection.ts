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
import { OrderSubtotal } from './order-subtotal.entity';
import { OrderSubtotalModel } from './order-subtotal.model';

export class OrderSubtotalCollection<E extends OrderSubtotal, M extends OrderSubtotalModel<E>> extends ODataCollection<E, M> {
  
}
