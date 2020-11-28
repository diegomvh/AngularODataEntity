import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export interface DomainDnsTxtRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  text: string;
  //#endregion
}