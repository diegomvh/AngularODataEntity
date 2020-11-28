import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
//#endregion

export const DataPolicyOperationStatusConfig = {
  name: "dataPolicyOperationStatus",
  members: DataPolicyOperationStatus
} as EnumTypeConfig<DataPolicyOperationStatus>;