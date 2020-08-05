import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DomainState } from './domainstate.entity';
import { DirectoryObject } from './directoryobject.entity';
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface Domain extends Entity {
  //#region ODataApi Properties
  authenticationType: string;
  availabilityStatus?: string;
  isAdminManaged: boolean;
  isDefault: boolean;
  isInitial: boolean;
  isRoot: boolean;
  isVerified: boolean;
  manufacturer?: string;
  model?: string;
  passwordNotificationWindowInDays?: number;
  passwordValidityPeriodInDays?: number;
  supportedServices: string[];
  state?: DomainState;
  serviceConfigurationRecords?: DomainDnsRecord[];
  verificationDnsRecords?: DomainDnsRecord[];
  domainNameReferences?: DirectoryObject[];
  //#endregion
}