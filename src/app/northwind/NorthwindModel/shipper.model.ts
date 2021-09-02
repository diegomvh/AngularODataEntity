import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Order } from './order.entity';
import { Shipper } from './shipper.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
import { ShipperCollection } from './shipper.collection';
//#endregion

@Model()
export class ShipperModel<E extends Shipper> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ShipperID!: number;
  public $ShipperID() {
    return this.property<number>('ShipperID');
  }
  public getShipperID(options?: HttpOptions) {
    return this.getValue<number>('ShipperID', options) as Observable<number>;
  }
  
  @ModelField()
  CompanyName!: string;
  public $CompanyName() {
    return this.property<string>('CompanyName');
  }
  public getCompanyName(options?: HttpOptions) {
    return this.getValue<string>('CompanyName', options) as Observable<string>;
  }
  
  @ModelField()
  Phone?: string;
  public $Phone() {
    return this.property<string>('Phone');
  }
  public getPhone(options?: HttpOptions) {
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
  public setOrders(model: OrderCollection<Order, OrderModel<Order>> | null, options?: HttpOptions) {
    return this.setReference<Order>('Orders', model, options);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}