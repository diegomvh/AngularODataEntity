import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IPv6CidrRange } from './ipv6cidrrange.entity';
//#endregion

export const IPv6CidrRangeConfig = {
  name: "IPv6CidrRange",
  base: "microsoft.graph.ipRange",
  annotations: [],
  fields: {
    cidrAddress: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IPv6CidrRange>;