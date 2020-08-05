import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditLogRoot } from './auditlogroot.entity';
//#endregion

export const AuditLogRootConfig = {
  name: "AuditLogRoot",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    signIns: {type: 'graph.signIn', collection: true, navigation: true},
    directoryAudits: {type: 'graph.directoryAudit', collection: true, navigation: true},
    restrictedSignIns: {type: 'graph.restrictedSignIn', collection: true, navigation: true}
  }
} as EntityConfig<AuditLogRoot>;