import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GenericError } from './genericerror.entity';
//#endregion

export interface ConvertIdResult {
  //#region ODataApi Properties
  sourceId?: string;
  targetId?: string;
  errorDetails?: GenericError;
  //#endregion
}