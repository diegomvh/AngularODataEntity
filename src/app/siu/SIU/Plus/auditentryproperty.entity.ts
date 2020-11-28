import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AuditEntry } from './auditentry.entity';
import { AuditEntryModel } from './auditentry.model';
import { AuditEntryCollection } from './auditentry.collection';
//#endregion

export interface AuditEntryProperty {
  //#region ODataApi Properties
  auditEntryPropertyID: number;
  auditEntryID?: number;
  propertyName?: string;
  relationName?: string;
  newValueFormatted?: string;
  oldValueFormatted?: string;
  parent?: AuditEntry;
  //#endregion
}