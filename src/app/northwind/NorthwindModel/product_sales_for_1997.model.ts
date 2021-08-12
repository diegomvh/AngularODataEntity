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
import { ProductSalesFor1997 } from './product_sales_for_1997.entity';
import { ProductSalesFor1997Collection } from './product_sales_for_1997.collection';
//#endregion

@Model()
export class ProductSalesFor1997Model<E extends ProductSalesFor1997> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CategoryName!: string;
  
  
  @ModelField()
  ProductName!: string;
  
  
  @ModelField()
  ProductSales?: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}