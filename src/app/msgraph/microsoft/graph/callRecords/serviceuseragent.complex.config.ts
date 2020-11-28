import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceUserAgent } from './serviceuseragent.complex';
import { ServiceUserAgentModel } from './serviceuseragent.model';
import { ServiceUserAgentCollection } from './serviceuseragent.collection';
//#endregion

export const ServiceUserAgentConfig = {
  name: "serviceUserAgent",
  base: "microsoft.graph.callRecords.userAgent",
  model: ServiceUserAgentModel,
  collection: ServiceUserAgentCollection,
  annotations: [],
  fields: {
    role: {type: 'microsoft.graph.callRecords.serviceRole', nullable: false}
  }
} as StructuredTypeConfig<ServiceUserAgent>;