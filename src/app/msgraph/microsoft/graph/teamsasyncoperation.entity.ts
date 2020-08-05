import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TeamsAsyncOperationType } from './teamsasyncoperationtype.enum';
import { TeamsAsyncOperationStatus } from './teamsasyncoperationstatus.enum';
import { OperationError } from './operationerror.entity';
//#endregion

export interface TeamsAsyncOperation extends Entity {
  //#region ODataApi Properties
  operationType: TeamsAsyncOperationType;
  createdDateTime: Date;
  status: TeamsAsyncOperationStatus;
  lastActionDateTime: Date;
  attemptsCount: number;
  targetResourceId?: string;
  targetResourceLocation?: string;
  error?: OperationError;
  //#endregion
}