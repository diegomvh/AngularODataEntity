import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
import { DomainDnsRecordModel } from './domaindnsrecord.model';
import { DomainDnsRecordCollection } from './domaindnsrecord.collection';
//#endregion

export interface DomainDnsSrvRecord extends DomainDnsRecord {
  //#region ODataApi Properties
  nameTarget?: string;
  port?: number;
  priority?: number;
  protocol?: string;
  service?: string;
  weight?: number;
  //#endregion
}