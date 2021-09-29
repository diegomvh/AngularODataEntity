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
  public $ShipperID() {
    return this.property<number>('ShipperID');
  }
  public getShipperID(options?: ODataOptions) {
    return this.getValue<number>('ShipperID', options) as Observable<number>;
  }
  
  @ModelField()
  CompanyName!: string;
  public $CompanyName() {
    return this.property<string>('CompanyName');
  }
  public getCompanyName(options?: ODataOptions) {
    return this.getValue<string>('CompanyName', options) as Observable<string>;
  }
  
  @ModelField()
  Phone?: string;
  public $Phone() {
    return this.property<string>('Phone');
  }
  public getPhone(options?: ODataOptions) {
    return this.getValue<string>('Phone', options) as Observable<string>;
  }
  
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  public $Orders() {
    return this.navigationProperty<Order>('Orders');
  }
  public getOrders() {
    return this.getReference<Order>('Orders') as OrderCollection<Order, OrderModel<Order>>;
  }
  public setOrders(model: OrderCollection<Order, OrderModel<Order>> | null, options?: ODataOptions) {
    return this.setReference<Order>('Orders', model, options);
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}