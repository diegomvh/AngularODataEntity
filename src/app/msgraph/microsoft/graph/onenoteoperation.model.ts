import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OperationModel } from './operation.model';
import { OnenoteOperationError } from './onenoteoperationerror.complex';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenoteOperationErrorModel } from './onenoteoperationerror.model';
import { OnenoteOperationErrorCollection } from './onenoteoperationerror.collection';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
//#endregion

export class OnenoteOperationModel<E extends OnenoteOperation> extends OperationModel<E> {
  //#region ODataApi Properties
  error?: OnenoteOperationErrorModel<OnenoteOperationError>;
  percentComplete?: string;
  resourceId?: string;
  resourceLocation?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}