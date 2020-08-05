import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
//#endregion

export const VppTokenSyncStatusConfig = {
  name: "VppTokenSyncStatus",
  members: VppTokenSyncStatus
} as EnumConfig<VppTokenSyncStatus>;