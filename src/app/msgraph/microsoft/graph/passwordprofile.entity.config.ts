import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PasswordProfile } from './passwordprofile.entity';
import { PasswordProfileModel } from './passwordprofile.model';
import { PasswordProfileCollection } from './passwordprofile.collection';
//#endregion

export const PasswordProfileConfig = {
  name: "passwordProfile",
  model: PasswordProfileModel,
  collection: PasswordProfileCollection,
  annotations: [],
  fields: {
    forceChangePasswordNextSignIn: {type: 'Edm.Boolean'},
    forceChangePasswordNextSignInWithMfa: {type: 'Edm.Boolean'},
    password: {type: 'Edm.String'}
  }
} as EntityConfig<PasswordProfile>;