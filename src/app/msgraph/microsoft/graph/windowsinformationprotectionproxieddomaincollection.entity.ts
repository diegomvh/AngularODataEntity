import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.entity';
//#endregion

export interface WindowsInformationProtectionProxiedDomainCollection {
  //#region ODataApi Properties
  displayName: string;
  proxiedDomains: ProxiedDomain[];
  //#endregion
}