import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsCnameRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  canonicalName?: string;
  //#endregion
}