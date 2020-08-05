import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Operation } from './operation.entity';
import { OnenoteOperationError } from './onenoteoperationerror.entity';
//#endregion

export interface OnenoteOperation extends Operation {
  //#region ODataApi Properties
  resourceLocation?: string;
  resourceId?: string;
  error?: OnenoteOperationError;
  percentComplete?: string;
  //#endregion
}