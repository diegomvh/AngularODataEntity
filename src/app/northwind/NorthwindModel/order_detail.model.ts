import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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

export class OrderDetailModel<E extends OrderDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  OrderID!: number;
  ProductID!: number;
  UnitPrice!: number;
  Quantity!: number;
  Discount!: number;
  Order?: OrderModel<Order>;
  Product?: ProductModel<Product>;
  //#endregion
  //#region ODataApi Setters
  public setOrder(model: OrderModel<Order> | null, options?: HttpOptions) {
    return this._setReference<Order>('Order', model, options);
  }public setProduct(model: ProductModel<Product> | null, options?: HttpOptions) {
    return this._setReference<Product>('Product', model, options);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}