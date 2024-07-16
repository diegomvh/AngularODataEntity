import { HttpHeaders, HttpParams } from '@angular/common/http';
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
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderDetail } from './order-detail.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { OrderModel } from './order.model';
import { ProductModel } from './product.model';
import { OrderDetailCollection } from './order-detail.collection';
import { OrderCollection } from './order.collection';
import { ProductCollection } from './product.collection';
//#endregion

@Model()
export class OrderDetailModel<E extends OrderDetail> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  OrderID!: number;
  public $$OrderID() {
    return this.property<number>('OrderID');
  }
  public $OrderID() {
    return this.getAttribute<number>('OrderID') as number;
  }
  
  public OrderID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('OrderID', options) as Observable<number>;
  }
  @ModelField()
  ProductID!: number;
  public $$ProductID() {
    return this.property<number>('ProductID');
  }
  public $ProductID() {
    return this.getAttribute<number>('ProductID') as number;
  }
  
  public ProductID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ProductID', options) as Observable<number>;
  }
  @ModelField()
  UnitPrice!: number;
  public $$UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public $UnitPrice() {
    return this.getAttribute<number>('UnitPrice') as number;
  }
  
  public UnitPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitPrice', options) as Observable<number>;
  }
  @ModelField()
  Quantity!: number;
  public $$Quantity() {
    return this.property<number>('Quantity');
  }
  public $Quantity() {
    return this.getAttribute<number>('Quantity') as number;
  }
  
  public Quantity$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Quantity', options) as Observable<number>;
  }
  @ModelField()
  Discount!: number;
  public $$Discount() {
    return this.property<number>('Discount');
  }
  public $Discount() {
    return this.getAttribute<number>('Discount') as number;
  }
  
  public Discount$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Discount', options) as Observable<number>;
  }
  @ModelField()
  Order?: OrderModel<Order>;
  public $$Order() {
    return this.navigationProperty<Order>('Order');
  }
  public $Order() {
    return this.getAttribute<Order>('Order') as OrderModel<Order>;
  }
  public Order$$(model: OrderModel<Order> | null, options?: ODataOptions) {
    return this.setReference<Order>('Order', model, options);
  }
  public Order$(options?: ODataQueryArgumentsOptions<Order>) {
      return this.fetchAttribute<Order>('Order', options) as Observable<OrderModel<Order>>;
    }
  @ModelField()
  Product?: ProductModel<Product>;
  public $$Product() {
    return this.navigationProperty<Product>('Product');
  }
  public $Product() {
    return this.getAttribute<Product>('Product') as ProductModel<Product>;
  }
  public Product$$(model: ProductModel<Product> | null, options?: ODataOptions) {
    return this.setReference<Product>('Product', model, options);
  }
  public Product$(options?: ODataQueryArgumentsOptions<Product>) {
      return this.fetchAttribute<Product>('Product', options) as Observable<ProductModel<Product>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}