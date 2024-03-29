﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Properties
  @ModelField()
  OrderID!: number;
  public $OrderID() {
    return this.property<number>('OrderID');
  }
  public getOrderID(options?: ODataOptions) {
    return this.getValue<number>('OrderID', options) as Observable<number>;
  }
  
  @ModelField()
  ProductID!: number;
  public $ProductID() {
    return this.property<number>('ProductID');
  }
  public getProductID(options?: ODataOptions) {
    return this.getValue<number>('ProductID', options) as Observable<number>;
  }
  
  @ModelField()
  UnitPrice!: number;
  public $UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public getUnitPrice(options?: ODataOptions) {
    return this.getValue<number>('UnitPrice', options) as Observable<number>;
  }
  
  @ModelField()
  Quantity!: number;
  public $Quantity() {
    return this.property<number>('Quantity');
  }
  public getQuantity(options?: ODataOptions) {
    return this.getValue<number>('Quantity', options) as Observable<number>;
  }
  
  @ModelField()
  Discount!: number;
  public $Discount() {
    return this.property<number>('Discount');
  }
  public getDiscount(options?: ODataOptions) {
    return this.getValue<number>('Discount', options) as Observable<number>;
  }
  
  @ModelField()
  Order?: OrderModel<Order>;
  public $Order() {
    return this.navigationProperty<Order>('Order');
  }
  public getOrder() {
    return this.getReference<Order>('Order') as OrderModel<Order>;
  }
  public setOrder(model: OrderModel<Order> | null, options?: ODataOptions) {
    return this.setReference<Order>('Order', model, options);
  }
  @ModelField()
  Product?: ProductModel<Product>;
  public $Product() {
    return this.navigationProperty<Product>('Product');
  }
  public getProduct() {
    return this.getReference<Product>('Product') as ProductModel<Product>;
  }
  public setProduct(model: ProductModel<Product> | null, options?: ODataOptions) {
    return this.setReference<Product>('Product', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}