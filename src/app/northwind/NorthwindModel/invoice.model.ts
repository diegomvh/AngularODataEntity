import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Invoice } from './invoice.entity';
import { InvoiceCollection } from './invoice.collection';
//#endregion

@Model()
export class InvoiceModel<E extends Invoice> extends ODataModel<E> {
  //#region ODataApi Properties
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
  CustomerID?: string;
  
  
  @ModelField()
  CustomerName!: string;
  
  
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
  
  
  @ModelField()
  Salesperson!: string;
  
  
  @ModelField()
  OrderID!: number;
  
  
  @ModelField()
  OrderDate?: Date;
  
  
  @ModelField()
  RequiredDate?: Date;
  
  
  @ModelField()
  ShippedDate?: Date;
  
  
  @ModelField()
  ShipperName!: string;
  
  
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  ProductName!: string;
  
  
  @ModelField()
  UnitPrice!: number;
  
  
  @ModelField()
  Quantity!: number;
  
  
  @ModelField()
  Discount!: number;
  
  
  @ModelField()
  ExtendedPrice?: number;
  
  
  @ModelField()
  Freight?: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}