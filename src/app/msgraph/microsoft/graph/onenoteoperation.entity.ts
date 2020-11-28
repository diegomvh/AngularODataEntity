import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Operation } from './operation.entity';
import { OnenoteOperationError } from './onenoteoperationerror.entity';
import { OnenoteOperationErrorModel } from './onenoteoperationerror.model';
import { OperationModel } from './operation.model';
import { OnenoteOperationErrorCollection } from './onenoteoperationerror.collection';
import { OperationCollection } from './operation.collection';
//#endregion

export interface OnenoteOperation extends Operation {
  //#region ODataApi Properties
  error?: OnenoteOperationError;
  percentComplete?: string;
  resourceId?: string;
  resourceLocation?: string;
  //#endregion
}