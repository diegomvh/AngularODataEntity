import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.entity';
import { IdentityModel } from './identity.model';
import { IdentityCollection } from './identity.collection';
//#endregion

export const IdentityConfig = {
  name: "identity",
  open: true,
  model: IdentityModel,
  collection: IdentityCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'}
  }
} as EntityConfig<Identity>;