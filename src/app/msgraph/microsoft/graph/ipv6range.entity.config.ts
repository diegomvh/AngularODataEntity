import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv6Range } from './ipv6range.entity';
//#endregion

export const IPv6RangeConfig = {
  name: "iPv6Range",
  base: "microsoft.graph.ipRange",
  annotations: [],
  fields: {
    lowerAddress: {type: 'Edm.String', nullable: false},
    upperAddress: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IPv6Range>;