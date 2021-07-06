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
import { Product } from './product.entity';
import { ProductCollection } from './product.collection';
//#endregion

@Model()
export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  ReleaseDate!: any;
  
  
  @ModelField()
  DiscontinuedDate?: any;
  
  
  @ModelField()
  Rating!: number;
  
  
  @ModelField()
  Price!: number;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}