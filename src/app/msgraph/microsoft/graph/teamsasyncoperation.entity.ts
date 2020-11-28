import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
import { OperationError } from './operationerror.complex';
import { OperationErrorModel } from './operationerror.model';
import { EntityModel } from './entity.model';
import { OperationErrorCollection } from './operationerror.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface TeamsAsyncOperation extends Entity {
  //#region ODataApi Properties
  attemptsCount: number;
  createdDateTime: Date;
  error?: OperationError;
  lastActionDateTime: Date;
  operationType: TeamsAsyncOperationType;
  status: TeamsAsyncOperationStatus;
  targetResourceId?: string;
  targetResourceLocation?: string;
  //#endregion
}