import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditEntryProperty } from './auditentryproperty.entity';
import { AuditEntryPropertyModel } from './auditentryproperty.model';
import { AuditEntryPropertyCollection } from './auditentryproperty.collection';
//#endregion

export const AuditEntryPropertyConfig = {
  name: "AuditEntryProperty",
  model: AuditEntryPropertyModel,
  collection: AuditEntryPropertyCollection,
  annotations: [],
  fields: {
    auditEntryPropertyID: {type: 'Edm.Int32', key: true, ref: 'auditEntryPropertyID', nullable: false},
    auditEntryID: {type: 'Edm.Int32'},
    propertyName: {type: 'Edm.String', maxLength: 255},
    relationName: {type: 'Edm.String', maxLength: 255},
    newValueFormatted: {type: 'Edm.String'},
    oldValueFormatted: {type: 'Edm.String'},
    parent: {type: 'SIU.Plus.AuditEntry', navigation: true, field: 'auditEntryID', ref: 'auditEntryID'}
  }
} as EntityConfig<AuditEntryProperty>;