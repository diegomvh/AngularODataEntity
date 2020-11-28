import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookFilterDatetime } from './workbookfilterdatetime.entity';
import { WorkbookFilterDatetimeCollection } from './workbookfilterdatetime.collection';
//#endregion

export class WorkbookFilterDatetimeModel<E extends WorkbookFilterDatetime> extends ODataModel<E> {
  //#region ODataApi Properties
  date?: string;
  specificity: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}