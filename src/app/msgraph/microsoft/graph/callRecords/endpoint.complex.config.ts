import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Endpoint } from './endpoint.complex';
import { EndpointModel } from './endpoint.model';
import { EndpointCollection } from './endpoint.collection';
//#endregion

export const EndpointConfig = {
  name: "endpoint",
  model: EndpointModel,
  collection: EndpointCollection,
  annotations: [],
  fields: {
    userAgent: {type: 'microsoft.graph.callRecords.userAgent'}
  }
} as StructuredTypeConfig<Endpoint>;