import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecurityState } from './cloudappsecuritystate.entity';
import { CloudAppSecurityStateModel } from './cloudappsecuritystate.model';
import { CloudAppSecurityStateCollection } from './cloudappsecuritystate.collection';
//#endregion

export const CloudAppSecurityStateConfig = {
  name: "cloudAppSecurityState",
  model: CloudAppSecurityStateModel,
  collection: CloudAppSecurityStateCollection,
  annotations: [],
  fields: {
    destinationServiceIp: {type: 'Edm.String'},
    destinationServiceName: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as EntityConfig<CloudAppSecurityState>;