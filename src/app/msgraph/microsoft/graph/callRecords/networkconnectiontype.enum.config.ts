import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
//#endregion

export const NetworkConnectionTypeConfig = {
  name: "networkConnectionType",
  members: NetworkConnectionType
} as EnumTypeConfig<NetworkConnectionType>;