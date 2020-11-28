import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
//#endregion

export class IosHomeScreenItemModel<E extends IosHomeScreenItem> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}