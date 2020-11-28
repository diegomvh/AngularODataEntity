import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnenoteOperationError } from './onenoteoperationerror.entity';
import { OnenoteOperationErrorModel } from './onenoteoperationerror.model';
//#endregion

export class OnenoteOperationErrorCollection<E extends OnenoteOperationError, M extends OnenoteOperationErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}