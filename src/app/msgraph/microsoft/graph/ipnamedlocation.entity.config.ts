import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IpNamedLocation } from './ipnamedlocation.entity';
import { IpNamedLocationModel } from './ipnamedlocation.model';
import { IpNamedLocationCollection } from './ipnamedlocation.collection';
//#endregion

export const IpNamedLocationConfig = {
  name: "ipNamedLocation",
  base: "microsoft.graph.namedLocation",
  model: IpNamedLocationModel,
  collection: IpNamedLocationCollection,
  annotations: [],
  fields: {
    ipRanges: {type: 'graph.ipRange', nullable: false, collection: true},
    isTrusted: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IpNamedLocation>;