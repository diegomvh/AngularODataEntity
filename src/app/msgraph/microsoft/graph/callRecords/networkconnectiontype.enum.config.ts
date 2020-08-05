import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
//#endregion

export const NetworkConnectionTypeConfig = {
  name: "networkConnectionType",
  members: NetworkConnectionType
} as EnumConfig<NetworkConnectionType>;