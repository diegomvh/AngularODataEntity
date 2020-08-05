import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ObjectIdentity } from './objectidentity.entity';
//#endregion

export const ObjectIdentityConfig = {
  name: "ObjectIdentity",
  annotations: [],
  fields: {
    signInType: {type: 'Edm.String'},
    issuer: {type: 'Edm.String'},
    issuerAssignedId: {type: 'Edm.String'}
  }
} as EntityConfig<ObjectIdentity>;