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
import { ProductDetail } from './productdetail.entity';
import { ProductDetailCollection } from './productdetail.collection';
//#endregion

@Model()
export class ProductDetailModel<E extends ProductDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  Details?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}