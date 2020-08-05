import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv4CidrRange } from './ipv4cidrrange.entity';
//#endregion

export const IPv4CidrRangeConfig = {
  name: "iPv4CidrRange",
  base: "microsoft.graph.ipRange",
  annotations: [],
  fields: {
    cidrAddress: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IPv4CidrRange>;