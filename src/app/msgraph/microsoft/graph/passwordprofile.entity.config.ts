import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PasswordProfile } from './passwordprofile.entity';
//#endregion

export const PasswordProfileConfig = {
  name: "passwordProfile",
  annotations: [],
  fields: {
    password: {type: 'Edm.String'},
    forceChangePasswordNextSignIn: {type: 'Edm.Boolean'},
    forceChangePasswordNextSignInWithMfa: {type: 'Edm.Boolean'}
  }
} as EntityConfig<PasswordProfile>;