import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface WorkbookOperationError {
  //#region ODataApi Properties
  code?: string;
  message?: string;
  innerError?: WorkbookOperationError;
  //#endregion
}