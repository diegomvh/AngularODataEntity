import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppListItem } from './applistitem.complex';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export class AppListItemModel<E extends AppListItem> extends ODataModel<E> {
  //#region ODataApi Properties
  appId?: string;
  appStoreUrl?: string;
  name: string;
  publisher?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}