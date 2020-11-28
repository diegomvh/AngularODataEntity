import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookSessionInfo } from './workbooksessioninfo.entity';
import { WorkbookSessionInfoCollection } from './workbooksessioninfo.collection';
//#endregion

export class WorkbookSessionInfoModel<E extends WorkbookSessionInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  id?: string;
  persistChanges?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}