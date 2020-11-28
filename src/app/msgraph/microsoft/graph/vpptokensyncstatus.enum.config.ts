import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
//#endregion

export const VppTokenSyncStatusConfig = {
  name: "vppTokenSyncStatus",
  members: VppTokenSyncStatus
} as EnumTypeConfig<VppTokenSyncStatus>;