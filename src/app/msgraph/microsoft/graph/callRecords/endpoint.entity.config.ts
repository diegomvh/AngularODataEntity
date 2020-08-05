import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Endpoint } from './endpoint.entity';
//#endregion

export const EndpointConfig = {
  name: "endpoint",
  annotations: [],
  fields: {
    userAgent: {type: 'microsoft.graph.callRecords.userAgent'}
  }
} as EntityConfig<Endpoint>;