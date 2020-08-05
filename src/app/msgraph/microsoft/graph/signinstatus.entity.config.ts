import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignInStatus } from './signinstatus.entity';
//#endregion

export const SignInStatusConfig = {
  name: "signInStatus",
  annotations: [],
  fields: {
    errorCode: {type: 'Edm.Int32'},
    failureReason: {type: 'Edm.String'},
    additionalDetails: {type: 'Edm.String'}
  }
} as EntityConfig<SignInStatus>;