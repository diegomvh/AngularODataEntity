import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OperationResult } from './operationresult.enum';
//#endregion

export const OperationResultConfig = {
  name: "operationResult",
  members: OperationResult
} as EnumTypeConfig<OperationResult>;