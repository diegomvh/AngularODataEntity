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
  
  
  @ModelField()
  CompanyName!: string;
  
  
  @ModelField()
  Phone?: string;
  
  
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  public getOrders({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<Order> = {}) {
    return this.getReference<Order>('Orders', {asEntity, ...options}) as Observable<OrderCollection<Order, OrderModel<Order>>>;
  }
  public setOrders(model: OrderCollection<Order, OrderModel<Order>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Order>('Orders', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}