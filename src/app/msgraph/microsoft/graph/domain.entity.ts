import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DomainState } from './domainstate.complex';
import { DirectoryObject } from './directoryobject.entity';
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainStateModel } from './domainstate.model';
import { EntityModel } from './entity.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainStateCollection } from './domainstate.collection';
import { EntityCollection } from './entity.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
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
  state?: DomainState;
  supportedServices: string[];
  domainNameReferences?: DirectoryObject[];
  serviceConfigurationRecords?: DomainDnsRecord[];
  verificationDnsRecords?: DomainDnsRecord[];
  //#endregion
}