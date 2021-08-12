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
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterCollection } from './summary_of_sales_by_quarter.collection';
//#endregion

@Model()
export class SummaryOfSalesByQuarterModel<E extends SummaryOfSalesByQuarter> extends ODataModel<E> {
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