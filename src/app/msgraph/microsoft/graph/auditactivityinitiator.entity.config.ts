import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
import { AuditActivityInitiatorModel } from './auditactivityinitiator.model';
import { AuditActivityInitiatorCollection } from './auditactivityinitiator.collection';
//#endregion

export const AuditActivityInitiatorConfig = {
  name: "auditActivityInitiator",
  model: AuditActivityInitiatorModel,
  collection: AuditActivityInitiatorCollection,
  annotations: [],
  fields: {
    app: {type: 'graph.appIdentity'},
    user: {type: 'graph.userIdentity'}
  }
} as EntityConfig<AuditActivityInitiator>;