import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ClientUserAgent } from './clientuseragent.entity';
//#endregion

export const ClientUserAgentConfig = {
  name: "clientUserAgent",
  base: "microsoft.graph.callRecords.userAgent",
  annotations: [],
  fields: {
    platform: {type: 'microsoft.graph.callRecords.clientPlatform', nullable: false},
    productFamily: {type: 'microsoft.graph.callRecords.productFamily', nullable: false}
  }
} as EntityConfig<ClientUserAgent>;