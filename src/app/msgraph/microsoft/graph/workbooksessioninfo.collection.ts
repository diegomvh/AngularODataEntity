import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookSessionInfo } from './workbooksessioninfo.complex';
import { WorkbookSessionInfoModel } from './workbooksessioninfo.model';
//#endregion

export class WorkbookSessionInfoCollection<E extends WorkbookSessionInfo, M extends WorkbookSessionInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}