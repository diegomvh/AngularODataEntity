import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LookupColumn } from './lookupcolumn.complex';
import { LookupColumnModel } from './lookupcolumn.model';
//#endregion

export class LookupColumnCollection<E extends LookupColumn, M extends LookupColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}