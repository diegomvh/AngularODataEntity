import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyError } from './freebusyerror.complex';
import { FreeBusyErrorModel } from './freebusyerror.model';
//#endregion

export class FreeBusyErrorCollection<E extends FreeBusyError, M extends FreeBusyErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}