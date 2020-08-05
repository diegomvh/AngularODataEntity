import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OperationResult } from './operationresult.enum';
//#endregion

export const OperationResultConfig = {
  name: "operationResult",
  members: OperationResult
} as EnumConfig<OperationResult>;