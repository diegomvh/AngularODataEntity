import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConnectionStatus } from './connectionstatus.enum';
//#endregion

export const ConnectionStatusConfig = {
  name: "connectionStatus",
  members: ConnectionStatus
} as EnumTypeConfig<ConnectionStatus>;