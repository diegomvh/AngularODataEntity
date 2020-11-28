import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export interface DomainDnsCnameRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  canonicalName?: string;
  //#endregion
}