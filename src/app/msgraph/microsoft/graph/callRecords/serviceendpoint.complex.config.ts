import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceEndpoint } from './serviceendpoint.complex';
import { ServiceEndpointModel } from './serviceendpoint.model';
import { ServiceEndpointCollection } from './serviceendpoint.collection';
//#endregion

export const ServiceEndpointConfig = {
  name: "serviceEndpoint",
  base: "microsoft.graph.callRecords.endpoint",
  model: ServiceEndpointModel,
  collection: ServiceEndpointCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ServiceEndpoint>;