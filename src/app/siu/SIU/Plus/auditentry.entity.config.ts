import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditEntry } from './auditentry.entity';
import { AuditEntryModel } from './auditentry.model';
import { AuditEntryCollection } from './auditentry.collection';
//#endregion

export const AuditEntryConfig = {
  name: "AuditEntry",
  model: AuditEntryModel,
  collection: AuditEntryCollection,
  annotations: [],
  fields: {
    auditEntryID: {type: 'Edm.Int32', key: true, ref: 'auditEntryID', nullable: false},
    createdBy: {type: 'Edm.String', maxLength: 255},
    createdDate: {type: 'Edm.DateTimeOffset', nullable: false},
    entitySetName: {type: 'Edm.String', maxLength: 255},
    entityTypeName: {type: 'Edm.String', maxLength: 255},
    state: {type: 'SIU.Plus.AuditEntryState', nullable: false},
    stateName: {type: 'Edm.String', maxLength: 255},
    properties: {type: 'SIU.Plus.AuditEntryProperty', collection: true, navigation: true}
  }
} as EntityConfig<AuditEntry>;