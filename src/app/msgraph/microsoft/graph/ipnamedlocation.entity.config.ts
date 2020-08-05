import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IpNamedLocation } from './ipnamedlocation.entity';
//#endregion

export const IpNamedLocationConfig = {
  name: "IpNamedLocation",
  base: "microsoft.graph.namedLocation",
  annotations: [],
  fields: {
    ipRanges: {type: 'graph.ipRange', nullable: false, collection: true},
    isTrusted: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IpNamedLocation>;