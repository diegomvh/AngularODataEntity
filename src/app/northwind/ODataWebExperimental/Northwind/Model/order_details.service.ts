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
import { OrderDetail } from '../../../NorthwindModel/order_detail.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Product } from '../../../NorthwindModel/product.entity';
import { OrderDetailModel } from '../../../NorthwindModel/order_detail.model';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { OrderDetailCollection } from '../../../NorthwindModel/order_detail.collection';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
//#endregion

@Injectable()
export class OrderDetailsService extends ODataEntityService<OrderDetail> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Details', 'NorthwindModel.Order_Detail');
  }

  orderDetailModel(): OrderDetailModel<OrderDetail> {
    return super.model() as OrderDetailModel<OrderDetail>;
  }
  
  orderDetailCollection(): OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> {
    return super.collection() as OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  }
}
