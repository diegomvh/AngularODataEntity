import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
//#endregion

export const DataPolicyOperationStatusConfig = {
  name: "DataPolicyOperationStatus",
  members: DataPolicyOperationStatus
} as EnumConfig<DataPolicyOperationStatus>;