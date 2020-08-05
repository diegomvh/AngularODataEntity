import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.entity';
//#endregion

export const InsightIdentityConfig = {
  name: "insightIdentity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    address: {type: 'Edm.String'}
  }
} as EntityConfig<InsightIdentity>;