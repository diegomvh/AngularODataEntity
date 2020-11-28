import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GenericError } from './genericerror.entity';
import { GenericErrorModel } from './genericerror.model';
import { GenericErrorCollection } from './genericerror.collection';
//#endregion

export interface ConvertIdResult {
  //#region ODataApi Properties
  errorDetails?: GenericError;
  sourceId?: string;
  targetId?: string;
  //#endregion
}