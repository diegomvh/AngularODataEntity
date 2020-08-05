import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsUnavailableRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  description?: string;
  //#endregion
}