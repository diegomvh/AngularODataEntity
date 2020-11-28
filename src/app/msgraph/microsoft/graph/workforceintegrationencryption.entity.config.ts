import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkforceIntegrationEncryption } from './workforceintegrationencryption.entity';
import { WorkforceIntegrationEncryptionModel } from './workforceintegrationencryption.model';
import { WorkforceIntegrationEncryptionCollection } from './workforceintegrationencryption.collection';
//#endregion

export const WorkforceIntegrationEncryptionConfig = {
  name: "workforceIntegrationEncryption",
  model: WorkforceIntegrationEncryptionModel,
  collection: WorkforceIntegrationEncryptionCollection,
  annotations: [],
  fields: {
    protocol: {type: 'graph.workforceIntegrationEncryptionProtocol'},
    secret: {type: 'Edm.String'}
  }
} as EntityConfig<WorkforceIntegrationEncryption>;