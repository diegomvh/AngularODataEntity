import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CurrentProductList } from './current_product_list.entity';
import { CurrentProductListCollection } from './current_product_list.collection';
//#endregion

export class CurrentProductListModel<E extends CurrentProductList> extends ODataModel<E> {
  //#region ODataApi Properties
  productID: number;
  productName: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}