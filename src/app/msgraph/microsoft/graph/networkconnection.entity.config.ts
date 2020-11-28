import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NetworkConnection } from './networkconnection.entity';
import { NetworkConnectionModel } from './networkconnection.model';
import { NetworkConnectionCollection } from './networkconnection.collection';
//#endregion

export const NetworkConnectionConfig = {
  name: "networkConnection",
  model: NetworkConnectionModel,
  collection: NetworkConnectionCollection,
  annotations: [],
  fields: {
    applicationName: {type: 'Edm.String'},
    destinationAddress: {type: 'Edm.String'},
    destinationDomain: {type: 'Edm.String'},
    destinationLocation: {type: 'Edm.String'},
    destinationPort: {type: 'Edm.String'},
    destinationUrl: {type: 'Edm.String'},
    direction: {type: 'graph.connectionDirection'},
    domainRegisteredDateTime: {type: 'Edm.DateTimeOffset'},
    localDnsName: {type: 'Edm.String'},
    natDestinationAddress: {type: 'Edm.String'},
    natDestinationPort: {type: 'Edm.String'},
    natSourceAddress: {type: 'Edm.String'},
    natSourcePort: {type: 'Edm.String'},
    protocol: {type: 'graph.securityNetworkProtocol'},
    riskScore: {type: 'Edm.String'},
    sourceAddress: {type: 'Edm.String'},
    sourceLocation: {type: 'Edm.String'},
    sourcePort: {type: 'Edm.String'},
    status: {type: 'graph.connectionStatus'},
    urlParameters: {type: 'Edm.String'}
  }
} as EntityConfig<NetworkConnection>;