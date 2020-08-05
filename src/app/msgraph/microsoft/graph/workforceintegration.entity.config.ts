import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegration } from './workforceintegration.entity';
//#endregion

export const WorkforceIntegrationConfig = {
  name: "WorkforceIntegration",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    apiVersion: {type: 'Edm.Int32'},
    encryption: {type: 'graph.workforceIntegrationEncryption'},
    isActive: {type: 'Edm.Boolean'},
    url: {type: 'Edm.String'},
    supportedEntities: {type: 'graph.workforceIntegrationSupportedEntities'}
  }
} as EntityConfig<WorkforceIntegration>;