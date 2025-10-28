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
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
import { OrderDetail } from './order-detail.entity';
import { OrderDetailModel } from './order-detail.model';
import { OrderDetailCollection } from './order-detail.collection';
import { Shipper } from './shipper.entity';
import { ShipperModel } from './shipper.model';

export class OrderCollection<E extends Order, M extends OrderModel<E>> extends ODataCollection<E, M> {
  
}
