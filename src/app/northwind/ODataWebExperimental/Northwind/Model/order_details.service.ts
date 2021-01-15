import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
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
export class OrderDetailsService extends ODataEntitySetService<OrderDetail> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Details', 'NorthwindModel.Order_Detail');
  }

  //#region ODataApi Model
  orderDetailModel(attrs?: Partial<OrderDetail>): OrderDetailModel<OrderDetail> {
    return this.entity().asModel(attrs || {}) as OrderDetailModel<OrderDetail>;
  }
  //#endregion
  //#region ODataApi Collection
  orderDetailCollection(models?: Partial<OrderDetail>[]): OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> {
    return this.entities().asCollection(models || []) as OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public order(entity: EntityKey<OrderDetail>): ODataNavigationPropertyResource<Order> {
    return this.entity(entity).navigationProperty<Order>('Order');
  }
  public product(entity: EntityKey<OrderDetail>): ODataNavigationPropertyResource<Product> {
    return this.entity(entity).navigationProperty<Product>('Product');
  }
  //#endregion
}
