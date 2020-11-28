import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv4Range } from './ipv4range.entity';
import { IPv4RangeModel } from './ipv4range.model';
import { IPv4RangeCollection } from './ipv4range.collection';
//#endregion

export const IPv4RangeConfig = {
  name: "iPv4Range",
  base: "microsoft.graph.ipRange",
  model: IPv4RangeModel,
  collection: IPv4RangeCollection,
  annotations: [],
  fields: {
    lowerAddress: {type: 'Edm.String', nullable: false},
    upperAddress: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IPv4Range>;