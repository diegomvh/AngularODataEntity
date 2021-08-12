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
import { CurrentProductList } from './current_product_list.entity';
import { CurrentProductListCollection } from './current_product_list.collection';
//#endregion

@Model()
export class CurrentProductListModel<E extends CurrentProductList> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ProductID!: number;
  
  
  @ModelField()
  ProductName!: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}