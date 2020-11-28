import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.complex';
import { WorkbookIconCollection } from './workbookicon.collection';
//#endregion

export class WorkbookIconModel<E extends WorkbookIcon> extends ODataModel<E> {
  //#region ODataApi Properties
  index: number;
  set: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}