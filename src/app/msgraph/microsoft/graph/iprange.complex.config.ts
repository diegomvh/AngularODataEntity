import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IpRange } from './iprange.complex';
import { IpRangeModel } from './iprange.model';
import { IpRangeCollection } from './iprange.collection';
//#endregion

export const IpRangeConfig = {
  name: "ipRange",
  model: IpRangeModel,
  collection: IpRangeCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<IpRange>;