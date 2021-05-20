import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OrderDetail } from './order_detail.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { OrderModel } from './order.model';
import { ProductModel } from './product.model';
import { OrderDetailCollection } from './order_detail.collection';
import { OrderCollection } from './order.collection';
import { ProductCollection } from './product.collection';
//#endregion

@Model()
export class OrderDetailModel<E extends OrderDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  OrderID!: number;
  
  
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  UnitPrice!: number;
  
  
  @ModelField()
  Quantity!: number;
  
  
  @ModelField()
  Discount!: number;
  
  
  @ModelField()
  Order?: OrderModel<Order>;
  public getOrder({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Order>('Order', {asEntity, ...options}) as Observable<OrderModel<Order>>;
  }
  public setOrder(model: OrderModel<Order> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Order>('Order', model, {asEntity, ...options});
  }
  @ModelField()
  Product?: ProductModel<Product>;
  public getProduct({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Product>('Product', {asEntity, ...options}) as Observable<ProductModel<Product>>;
  }
  public setProduct(model: ProductModel<Product> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Product>('Product', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}