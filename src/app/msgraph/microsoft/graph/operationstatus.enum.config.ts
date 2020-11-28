import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OperationStatus } from './operationstatus.enum';
//#endregion

export const OperationStatusConfig = {
  name: "operationStatus",
  members: OperationStatus
} as EnumTypeConfig<OperationStatus>;