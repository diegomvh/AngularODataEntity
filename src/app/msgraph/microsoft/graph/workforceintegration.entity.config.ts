import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegration } from './workforceintegration.entity';
import { WorkforceIntegrationModel } from './workforceintegration.model';
import { WorkforceIntegrationCollection } from './workforceintegration.collection';
//#endregion

export const WorkforceIntegrationConfig = {
  name: "workforceIntegration",
  base: "microsoft.graph.changeTrackedEntity",
  model: WorkforceIntegrationModel,
  collection: WorkforceIntegrationCollection,
  annotations: [],
  fields: {
    apiVersion: {type: 'Edm.Int32'},
    displayName: {type: 'Edm.String'},
    encryption: {type: 'graph.workforceIntegrationEncryption'},
    isActive: {type: 'Edm.Boolean'},
    supportedEntities: {type: 'graph.workforceIntegrationSupportedEntities'},
    url: {type: 'Edm.String'}
  }
} as EntityConfig<WorkforceIntegration>;