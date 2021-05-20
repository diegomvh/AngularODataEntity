import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}