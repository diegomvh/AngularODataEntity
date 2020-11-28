import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteOperationError } from './onenoteoperationerror.entity';
import { OnenoteOperationErrorCollection } from './onenoteoperationerror.collection';
//#endregion

export class OnenoteOperationErrorModel<E extends OnenoteOperationError> extends ODataModel<E> {
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