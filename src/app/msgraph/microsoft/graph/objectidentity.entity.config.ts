import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ObjectIdentity } from './objectidentity.entity';
import { ObjectIdentityModel } from './objectidentity.model';
import { ObjectIdentityCollection } from './objectidentity.collection';
//#endregion

export const ObjectIdentityConfig = {
  name: "objectIdentity",
  model: ObjectIdentityModel,
  collection: ObjectIdentityCollection,
  annotations: [],
  fields: {
    issuer: {type: 'Edm.String'},
    issuerAssignedId: {type: 'Edm.String'},
    signInType: {type: 'Edm.String'}
  }
} as EntityConfig<ObjectIdentity>;