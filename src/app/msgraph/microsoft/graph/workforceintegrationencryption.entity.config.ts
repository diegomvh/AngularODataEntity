import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.entity';
//#endregion

export const WorkforceIntegrationEncryptionConfig = {
  name: "WorkforceIntegrationEncryption",
  annotations: [],
  fields: {
    protocol: {type: 'graph.workforceIntegrationEncryptionProtocol'},
    secret: {type: 'Edm.String'}
  }
} as EntityConfig<WorkforceIntegrationEncryption>;