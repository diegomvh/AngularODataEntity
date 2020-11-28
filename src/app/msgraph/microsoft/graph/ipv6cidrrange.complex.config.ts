import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv6CidrRange } from './ipv6cidrrange.complex';
import { IPv6CidrRangeModel } from './ipv6cidrrange.model';
import { IPv6CidrRangeCollection } from './ipv6cidrrange.collection';
//#endregion

export const IPv6CidrRangeConfig = {
  name: "iPv6CidrRange",
  base: "microsoft.graph.ipRange",
  model: IPv6CidrRangeModel,
  collection: IPv6CidrRangeCollection,
  annotations: [],
  fields: {
    cidrAddress: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IPv6CidrRange>;