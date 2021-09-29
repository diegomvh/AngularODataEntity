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
import { ErrataList } from './erratalist.complex';
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErrataListCollection } from './erratalist.collection';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

@Model()
export class ErrataListModel<E extends ErrataList> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  Items?: ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>;
  public $Items() {
    return this.property<ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>>('Items');
  }
  public getItems(options?: ODataOptions) {
    return this.getValue<ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>>('Items', options) as Observable<ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}