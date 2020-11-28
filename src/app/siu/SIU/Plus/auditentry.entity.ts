import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AuditEntryState } from './auditentrystate.enum';
import { AuditEntryProperty } from './auditentryproperty.entity';
import { AuditEntryPropertyModel } from './auditentryproperty.model';
import { AuditEntryPropertyCollection } from './auditentryproperty.collection';
//#endregion

export interface AuditEntry {
  //#region ODataApi Properties
  auditEntryID: number;
  createdBy?: string;
  createdDate: Date;
  entitySetName?: string;
  entityTypeName?: string;
  state: AuditEntryState;
  stateName?: string;
  properties?: AuditEntryProperty[];
  //#endregion
}