import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OperationCollection } from './operation.collection';
import { OnenoteOperationError } from './onenoteoperationerror.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenoteOperationErrorModel } from './onenoteoperationerror.model';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenoteOperationErrorCollection } from './onenoteoperationerror.collection';
//#endregion

export class OnenoteOperationCollection<E extends OnenoteOperation, M extends OnenoteOperationModel<E>> extends OperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}