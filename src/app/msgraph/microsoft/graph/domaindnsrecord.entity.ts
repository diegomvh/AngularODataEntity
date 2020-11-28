import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DomainDnsRecord extends Entity {
  //#region ODataApi Properties
  isOptional: boolean;
  label: string;
  recordType?: string;
  supportedService: string;
  ttl: number;
  //#endregion
}