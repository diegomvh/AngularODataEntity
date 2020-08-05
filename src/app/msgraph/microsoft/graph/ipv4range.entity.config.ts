import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv4Range } from './ipv4range.entity';
//#endregion

export const IPv4RangeConfig = {
  name: "iPv4Range",
  base: "microsoft.graph.ipRange",
  annotations: [],
  fields: {
    lowerAddress: {type: 'Edm.String', nullable: false},
    upperAddress: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IPv4Range>;