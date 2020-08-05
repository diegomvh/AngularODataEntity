import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Identity } from './identity.entity';
//#endregion

export const IdentityConfig = {
  name: "Identity",
  open: true,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'}
  }
} as EntityConfig<Identity>;