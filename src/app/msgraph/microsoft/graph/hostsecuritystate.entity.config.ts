import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { HostSecurityState } from './hostsecuritystate.entity';
//#endregion

export const HostSecurityStateConfig = {
  name: "hostSecurityState",
  annotations: [],
  fields: {
    fqdn: {type: 'Edm.String'},
    isAzureAdJoined: {type: 'Edm.Boolean'},
    isAzureAdRegistered: {type: 'Edm.Boolean'},
    isHybridAzureDomainJoined: {type: 'Edm.Boolean'},
    netBiosName: {type: 'Edm.String'},
    os: {type: 'Edm.String'},
    privateIpAddress: {type: 'Edm.String'},
    publicIpAddress: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as EntityConfig<HostSecurityState>;