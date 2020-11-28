import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookFilterDatetime } from './workbookfilterdatetime.complex';
import { WorkbookFilterDatetimeModel } from './workbookfilterdatetime.model';
//#endregion

export class WorkbookFilterDatetimeCollection<E extends WorkbookFilterDatetime, M extends WorkbookFilterDatetimeModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}