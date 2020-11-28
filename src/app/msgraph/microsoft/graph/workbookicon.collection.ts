import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.complex';
import { WorkbookIconModel } from './workbookicon.model';
//#endregion

export class WorkbookIconCollection<E extends WorkbookIcon, M extends WorkbookIconModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}