import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.entity';
import { InsightIdentityModel } from './insightidentity.model';
import { InsightIdentityCollection } from './insightidentity.collection';
//#endregion

export const InsightIdentityConfig = {
  name: "insightIdentity",
  model: InsightIdentityModel,
  collection: InsightIdentityCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'}
  }
} as EntityConfig<InsightIdentity>;