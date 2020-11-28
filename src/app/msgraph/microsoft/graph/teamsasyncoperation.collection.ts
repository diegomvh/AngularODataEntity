import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
import { OperationError } from './operationerror.complex';
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
import { OperationErrorModel } from './operationerror.model';
import { TeamsAsyncOperationModel } from './teamsasyncoperation.model';
import { OperationErrorCollection } from './operationerror.collection';
//#endregion

export class TeamsAsyncOperationCollection<E extends TeamsAsyncOperation, M extends TeamsAsyncOperationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}