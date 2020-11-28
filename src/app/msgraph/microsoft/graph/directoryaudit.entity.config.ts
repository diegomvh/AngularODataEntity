import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryAudit } from './directoryaudit.entity';
import { DirectoryAuditModel } from './directoryaudit.model';
import { DirectoryAuditCollection } from './directoryaudit.collection';
//#endregion

export const DirectoryAuditConfig = {
  name: "directoryAudit",
  base: "microsoft.graph.entity",
  model: DirectoryAuditModel,
  collection: DirectoryAuditCollection,
  annotations: [],
  fields: {
    activityDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    activityDisplayName: {type: 'Edm.String', nullable: false},
    additionalDetails: {type: 'graph.keyValue', collection: true},
    category: {type: 'Edm.String', nullable: false},
    correlationId: {type: 'Edm.String'},
    initiatedBy: {type: 'graph.auditActivityInitiator', nullable: false},
    loggedByService: {type: 'Edm.String'},
    operationType: {type: 'Edm.String'},
    result: {type: 'graph.operationResult'},
    resultReason: {type: 'Edm.String'},
    targetResources: {type: 'graph.targetResource', collection: true}
  }
} as StructuredTypeConfig<DirectoryAudit>;