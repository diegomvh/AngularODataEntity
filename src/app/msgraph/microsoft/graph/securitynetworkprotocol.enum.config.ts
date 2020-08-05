import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityNetworkProtocol } from './securitynetworkprotocol.enum';
//#endregion

export const SecurityNetworkProtocolConfig = {
  name: "SecurityNetworkProtocol",
  members: SecurityNetworkProtocol
} as EnumConfig<SecurityNetworkProtocol>;