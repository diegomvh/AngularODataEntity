import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditLogRoot } from './auditlogroot.entity';
import { AuditLogRootModel } from './auditlogroot.model';
import { AuditLogRootCollection } from './auditlogroot.collection';
//#endregion

export const AuditLogRootConfig = {
  name: "auditLogRoot",
  base: "microsoft.graph.entity",
  model: AuditLogRootModel,
  collection: AuditLogRootCollection,
  annotations: [],
  fields: {
    directoryAudits: {type: 'graph.directoryAudit', collection: true, navigation: true},
    restrictedSignIns: {type: 'graph.restrictedSignIn', collection: true, navigation: true},
    signIns: {type: 'graph.signIn', collection: true, navigation: true}
  }
} as EntityConfig<AuditLogRoot>;