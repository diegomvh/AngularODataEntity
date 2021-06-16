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
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrdersQry } from './orders_qry.entity';
import { OrdersQryCollection } from './orders_qry.collection';
//#endregion

@Model()
export class OrdersQryModel<E extends OrdersQry> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  OrderID!: number;
  
  
  @ModelField()
  CustomerID?: string;
  
  
  @ModelField()
  EmployeeID?: number;
  
  
  @ModelField()
  OrderDate?: Date;
  
  
  @ModelField()
  RequiredDate?: Date;
  
  
  @ModelField()
  ShippedDate?: Date;
  
  
  @ModelField()
  ShipVia?: number;
  
  
  @ModelField()
  Freight?: number;
  
  
  @ModelField()
  ShipName?: string;
  
  
  @ModelField()
  ShipAddress?: string;
  
  
  @ModelField()
  ShipCity?: string;
  
  
  @ModelField()
  ShipRegion?: string;
  
  
  @ModelField()
  ShipPostalCode?: string;
  
  
  @ModelField()
  ShipCountry?: string;
  
  
  @ModelField()
  CompanyName!: string;
  
  
  @ModelField()
  Address?: string;
  
  
  @ModelField()
  City?: string;
  
  
  @ModelField()
  Region?: string;
  
  
  @ModelField()
  PostalCode?: string;
  
  
  @ModelField()
  Country?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}