import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeColumn } from './datetimecolumn.complex';
import { DateTimeColumnCollection } from './datetimecolumn.collection';
//#endregion

export class DateTimeColumnModel<E extends DateTimeColumn> extends ODataModel<E> {
  //#region ODataApi Properties
  displayAs?: string;
  format?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}