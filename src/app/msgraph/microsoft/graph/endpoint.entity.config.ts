import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Endpoint } from './endpoint.entity';
//#endregion

export const EndpointConfig = {
  name: "Endpoint",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    capability: {type: 'Edm.String', nullable: false},
    providerId: {type: 'Edm.String'},
    providerName: {type: 'Edm.String'},
    uri: {type: 'Edm.String', nullable: false},
    providerResourceId: {type: 'Edm.String'}
  }
} as EntityConfig<Endpoint>;