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
import { SummaryOfSalesByYear } from './summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearCollection } from './summary_of_sales_by_year.collection';
//#endregion

@Model()
export class SummaryOfSalesByYearModel<E extends SummaryOfSalesByYear> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ShippedDate?: Date;
  
  
  @ModelField()
  OrderID!: number;
  
  
  @ModelField()
  Subtotal?: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}