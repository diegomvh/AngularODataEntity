import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface HostSecurityState {
  //#region ODataApi Properties
  fqdn?: string;
  isAzureAdJoined?: boolean;
  isAzureAdRegistered?: boolean;
  isHybridAzureDomainJoined?: boolean;
  netBiosName?: string;
  os?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  riskScore?: string;
  //#endregion
}