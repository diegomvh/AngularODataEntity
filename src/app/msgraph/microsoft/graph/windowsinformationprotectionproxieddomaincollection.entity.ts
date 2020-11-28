import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ProxiedDomain } from './proxieddomain.entity';
import { ProxiedDomainModel } from './proxieddomain.model';
import { ProxiedDomainCollection } from './proxieddomain.collection';
//#endregion

export interface WindowsInformationProtectionProxiedDomainCollection {
  //#region ODataApi Properties
  displayName: string;
  proxiedDomains: ProxiedDomain[];
  //#endregion
}