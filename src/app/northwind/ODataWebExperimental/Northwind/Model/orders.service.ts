import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Customer } from '../../../NorthwindModel/customer.entity';
import { Employee } from '../../../NorthwindModel/employee.entity';
import { OrderDetail } from '../../../NorthwindModel/order_detail.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Shipper } from '../../../NorthwindModel/shipper.entity';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { EmployeeModel } from '../../../NorthwindModel/employee.model';
import { OrderDetailModel } from '../../../NorthwindModel/order_detail.model';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { ShipperModel } from '../../../NorthwindModel/shipper.model';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
import { EmployeeCollection } from '../../../NorthwindModel/employee.collection';
import { OrderDetailCollection } from '../../../NorthwindModel/order_detail.collection';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { ShipperCollection } from '../../../NorthwindModel/shipper.collection';
//#endregion

@Injectable()
export class OrdersService extends ODataEntityService<Order> {
  constructor(protected client: ODataClient) {
    super(client, 'Orders', 'NorthwindModel.Order');
  }

  orderModel(): OrderModel<Order> {
    return super.model() as OrderModel<Order>;
  }
  
  orderCollection(): OrderCollection<Order, OrderModel<Order>> {
    return super.collection() as OrderCollection<Order, OrderModel<Order>>;
  }
}
