import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ErrataList } from './erratalist.complex';
import { ErratumItem } from './erratumitem.complex';
import { ErratumItemModel } from './erratumitem.model';
import { ErrataListCollection } from './erratalist.collection';
import { ErratumItemCollection } from './erratumitem.collection';
//#endregion

export class ErrataListModel<E extends ErrataList> extends ODataModel<E> {
  //#region ODataApi Properties
  Items?: ErratumItemCollection<ErratumItem, ErratumItemModel<ErratumItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}