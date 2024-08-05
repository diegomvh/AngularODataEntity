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
import { Order } from './order.entity';
import { Shipper } from './shipper.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
import { ShipperCollection } from './shipper.collection';
//#endregion

@Model()
export class ShipperModel<E extends Shipper> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ShipperID!: number;
  public $$ShipperID() {
    return this.property<number>('ShipperID');
  }
  public $ShipperID() {
    return this.getAttribute<number>('ShipperID') as number;
  }
  
  public ShipperID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ShipperID', options) as Observable<number>;
  }
  @ModelField()
  CompanyName?: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  
  public CompanyName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }
  @ModelField()
  Phone?: string;
  public $$Phone() {
    return this.property<string>('Phone');
  }
  public $Phone() {
    return this.getAttribute<string>('Phone') as string;
  }
  
  public Phone$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('Phone', options) as Observable<string>;
  }
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  public $$Orders() {
    return this.navigationProperty<Order>('Orders');
  }
  public $Orders() {
    return this.getAttribute<Order>('Orders') as OrderCollection<Order, OrderModel<Order>>;
  }
  public Orders$$(model: OrderCollection<Order, OrderModel<Order>> | null, options?: ODataOptions) {
    return this.setReference<Order>('Orders', model, options);
  }
  public Orders$(options?: ODataQueryArgumentsOptions<Order>) {
      return this.fetchAttribute<Order>('Orders', options) as Observable<OrderCollection<Order, OrderModel<Order>>>;
    }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}