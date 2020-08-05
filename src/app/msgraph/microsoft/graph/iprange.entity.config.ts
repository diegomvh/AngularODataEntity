import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.entity';
//#endregion

export const IpRangeConfig = {
  name: "ipRange",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<IpRange>;