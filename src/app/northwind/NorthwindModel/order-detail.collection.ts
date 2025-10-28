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
import { OrderDetail } from './order-detail.entity';
import { OrderDetailModel } from './order-detail.model';
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { Product } from './product.entity';
import { ProductModel } from './product.model';

export class OrderDetailCollection<E extends OrderDetail, M extends OrderDetailModel<E>> extends ODataCollection<E, M> {
  
}
