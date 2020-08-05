import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceEndpoint } from './serviceendpoint.entity';
//#endregion

export const ServiceEndpointConfig = {
  name: "ServiceEndpoint",
  base: "microsoft.graph.callRecords.endpoint",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ServiceEndpoint>;