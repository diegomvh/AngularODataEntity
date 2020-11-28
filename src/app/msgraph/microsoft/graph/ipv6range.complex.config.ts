import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv6Range } from './ipv6range.complex';
import { IPv6RangeModel } from './ipv6range.model';
import { IPv6RangeCollection } from './ipv6range.collection';
//#endregion

export const IPv6RangeConfig = {
  name: "iPv6Range",
  base: "microsoft.graph.ipRange",
  model: IPv6RangeModel,
  collection: IPv6RangeCollection,
  annotations: [],
  fields: {
    lowerAddress: {type: 'Edm.String', nullable: false},
    upperAddress: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IPv6Range>;