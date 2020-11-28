import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LookupColumn } from './lookupcolumn.complex';
import { LookupColumnCollection } from './lookupcolumn.collection';
//#endregion

export class LookupColumnModel<E extends LookupColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  allowMultipleValues?: boolean;
  allowUnlimitedLength?: boolean;
  columnName?: string;
  listId?: string;
  primaryLookupColumnId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}