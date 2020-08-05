import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsMxRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  mailExchange: string;
  preference?: number;
  //#endregion
}