import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Endpoint } from './endpoint.entity';
import { EndpointModel } from './endpoint.model';
import { EndpointCollection } from './endpoint.collection';
//#endregion

export const EndpointConfig = {
  name: "endpoint",
  base: "microsoft.graph.directoryObject",
  open: true,
  model: EndpointModel,
  collection: EndpointCollection,
  annotations: [],
  fields: {
    capability: {type: 'Edm.String', nullable: false},
    providerId: {type: 'Edm.String'},
    providerName: {type: 'Edm.String'},
    providerResourceId: {type: 'Edm.String'},
    uri: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<Endpoint>;