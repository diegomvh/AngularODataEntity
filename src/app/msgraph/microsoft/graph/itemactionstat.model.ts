import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ItemActionStat } from './itemactionstat.complex';
import { ItemActionStatCollection } from './itemactionstat.collection';
//#endregion

export class ItemActionStatModel<E extends ItemActionStat> extends ODataModel<E> {
  //#region ODataApi Properties
  actionCount?: number;
  actorCount?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}