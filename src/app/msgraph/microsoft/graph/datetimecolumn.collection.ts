import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeColumn } from './datetimecolumn.complex';
import { DateTimeColumnModel } from './datetimecolumn.model';
//#endregion

export class DateTimeColumnCollection<E extends DateTimeColumn, M extends DateTimeColumnModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}