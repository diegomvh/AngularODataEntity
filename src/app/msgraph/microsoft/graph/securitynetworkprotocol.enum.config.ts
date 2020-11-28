import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityNetworkProtocol } from './securitynetworkprotocol.enum';
//#endregion

export const SecurityNetworkProtocolConfig = {
  name: "securityNetworkProtocol",
  members: SecurityNetworkProtocol
} as EnumTypeConfig<SecurityNetworkProtocol>;