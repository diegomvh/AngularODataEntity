import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GenericError } from './genericerror.complex';
import { GenericErrorCollection } from './genericerror.collection';
//#endregion

export class GenericErrorModel<E extends GenericError> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  message?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}