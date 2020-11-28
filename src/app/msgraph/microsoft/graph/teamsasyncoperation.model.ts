import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
import { OperationError } from './operationerror.complex';
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
import { OperationErrorModel } from './operationerror.model';
import { OperationErrorCollection } from './operationerror.collection';
import { TeamsAsyncOperationCollection } from './teamsasyncoperation.collection';
//#endregion

export class TeamsAsyncOperationModel<E extends TeamsAsyncOperation> extends EntityModel<E> {
  //#region ODataApi Properties
  attemptsCount: number;
  createdDateTime: Date;
  error?: OperationErrorModel<OperationError>;
  lastActionDateTime: Date;
  operationType: TeamsAsyncOperationType;
  status: TeamsAsyncOperationStatus;
  targetResourceId?: string;
  targetResourceLocation?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}