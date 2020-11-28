import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv4CidrRange } from './ipv4cidrrange.complex';
import { IPv4CidrRangeModel } from './ipv4cidrrange.model';
import { IPv4CidrRangeCollection } from './ipv4cidrrange.collection';
//#endregion

export const IPv4CidrRangeConfig = {
  name: "iPv4CidrRange",
  base: "microsoft.graph.ipRange",
  model: IPv4CidrRangeModel,
  collection: IPv4CidrRangeCollection,
  annotations: [],
  fields: {
    cidrAddress: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IPv4CidrRange>;