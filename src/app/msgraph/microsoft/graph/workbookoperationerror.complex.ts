import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperationErrorModel } from './workbookoperationerror.model';
import { WorkbookOperationErrorCollection } from './workbookoperationerror.collection';
//#endregion

export interface WorkbookOperationError {
  //#region ODataApi Properties
  code?: string;
  innerError?: WorkbookOperationError;
  message?: string;
  //#endregion
}