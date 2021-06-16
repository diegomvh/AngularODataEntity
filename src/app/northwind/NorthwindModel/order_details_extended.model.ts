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
import { OrderDetailsExtended } from './order_details_extended.entity';
import { OrderDetailsExtendedCollection } from './order_details_extended.collection';
//#endregion

@Model()
export class OrderDetailsExtendedModel<E extends OrderDetailsExtended> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  OrderID!: number;
  
  
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
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}