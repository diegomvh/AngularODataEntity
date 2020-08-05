import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServiceUserAgent } from './serviceuseragent.entity';
//#endregion

export const ServiceUserAgentConfig = {
  name: "ServiceUserAgent",
  base: "microsoft.graph.callRecords.userAgent",
  annotations: [],
  fields: {
    role: {type: 'microsoft.graph.callRecords.serviceRole', nullable: false}
  }
} as EntityConfig<ServiceUserAgent>;