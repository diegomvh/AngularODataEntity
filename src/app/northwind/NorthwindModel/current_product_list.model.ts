import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CurrentProductList } from './current_product_list.entity';
import { CurrentProductListCollection } from './current_product_list.collection';
//#endregion

@Model()
export class CurrentProductListModel<E extends CurrentProductList> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ProductID!: number;
  public $ProductID() {
    return this.property<number>('ProductID');
  }
  public getProductID(options?: ODataOptions) {
    return this.getValue<number>('ProductID', options) as Observable<number>;
  }
  
  @ModelField()
  ProductName!: string;
  public $ProductName() {
    return this.property<string>('ProductName');
  }
  public getProductName(options?: ODataOptions) {
    return this.getValue<string>('ProductName', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}