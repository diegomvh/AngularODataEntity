import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
//#endregion

export interface DomainDnsTxtRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  text: string;
  //#endregion
}