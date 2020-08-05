import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConnectionStatus } from './connectionstatus.enum';
//#endregion

export const ConnectionStatusConfig = {
  name: "ConnectionStatus",
  members: ConnectionStatus
} as EnumConfig<ConnectionStatus>;