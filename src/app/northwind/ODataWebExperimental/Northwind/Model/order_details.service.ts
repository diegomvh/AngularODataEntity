import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Model
  orderDetailModel(attrs?: Partial<OrderDetail>): OrderDetailModel<OrderDetail> {
    return this.entity().asModel<OrderDetailModel<OrderDetail>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  orderDetailCollection(models?: Partial<OrderDetail>[]): OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>> {
    return this.entities().asCollection<OrderDetailModel<OrderDetail>, OrderDetailCollection<OrderDetail, OrderDetailModel<OrderDetail>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public order(key: EntityKey<OrderDetail>): ODataNavigationPropertyResource<Order> { 
    return this.entity(key).navigationProperty<Order>('Order'); 
  }
  public fetchOrder(key: EntityKey<OrderDetail>, options?: ODataQueryArgumentsOptions<Order>) {
    return this.fetchNavigationProperty<Order>(
      this.order(key), 
      'entity', options) as Observable<ODataEntity<Order>>;
  }
  public setOrderAsOrder(key: EntityKey<OrderDetail>, target: ODataEntityResource<ODataEntity<Order>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.order(key).reference()
      .set(target, {etag});
  }
  public unsetOrderAsOrder(key: EntityKey<OrderDetail>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Order>>, etag?: string} = {}): Observable<any> {
    return this.order(key).reference()
      .unset({etag});
  }
  public product(key: EntityKey<OrderDetail>): ODataNavigationPropertyResource<Product> { 
    return this.entity(key).navigationProperty<Product>('Product'); 
  }
  public fetchProduct(key: EntityKey<OrderDetail>, options?: ODataQueryArgumentsOptions<Product>) {
    return this.fetchNavigationProperty<Product>(
      this.product(key), 
      'entity', options) as Observable<ODataEntity<Product>>;
  }
  public setProductAsProduct(key: EntityKey<OrderDetail>, target: ODataEntityResource<ODataEntity<Product>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.product(key).reference()
      .set(target, {etag});
  }
  public unsetProductAsProduct(key: EntityKey<OrderDetail>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Product>>, etag?: string} = {}): Observable<any> {
    return this.product(key).reference()
      .unset({etag});
  }
  //#endregion
}
