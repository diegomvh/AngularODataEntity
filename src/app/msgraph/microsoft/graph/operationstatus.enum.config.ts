import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OperationStatus } from './operationstatus.enum';
//#endregion

export const OperationStatusConfig = {
  name: "OperationStatus",
  members: OperationStatus
} as EnumConfig<OperationStatus>;