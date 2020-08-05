import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DomainDnsRecord } from './domaindnsrecord.entity';
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