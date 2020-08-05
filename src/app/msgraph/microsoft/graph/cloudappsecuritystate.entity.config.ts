import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudAppSecurityState } from './cloudappsecuritystate.entity';
//#endregion

export const CloudAppSecurityStateConfig = {
  name: "cloudAppSecurityState",
  annotations: [],
  fields: {
    destinationServiceIp: {type: 'Edm.String'},
    destinationServiceName: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as EntityConfig<CloudAppSecurityState>;