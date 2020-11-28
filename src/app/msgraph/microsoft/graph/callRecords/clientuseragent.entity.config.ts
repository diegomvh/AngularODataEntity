import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ClientUserAgent } from './clientuseragent.entity';
import { ClientUserAgentModel } from './clientuseragent.model';
import { ClientUserAgentCollection } from './clientuseragent.collection';
//#endregion

export const ClientUserAgentConfig = {
  name: "clientUserAgent",
  base: "microsoft.graph.callRecords.userAgent",
  model: ClientUserAgentModel,
  collection: ClientUserAgentCollection,
  annotations: [],
  fields: {
    platform: {type: 'microsoft.graph.callRecords.clientPlatform', nullable: false},
    productFamily: {type: 'microsoft.graph.callRecords.productFamily', nullable: false}
  }
} as EntityConfig<ClientUserAgent>;