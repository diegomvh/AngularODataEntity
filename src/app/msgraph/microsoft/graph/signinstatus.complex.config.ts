import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignInStatus } from './signinstatus.complex';
import { SignInStatusModel } from './signinstatus.model';
import { SignInStatusCollection } from './signinstatus.collection';
//#endregion

export const SignInStatusConfig = {
  name: "signInStatus",
  model: SignInStatusModel,
  collection: SignInStatusCollection,
  annotations: [],
  fields: {
    additionalDetails: {type: 'Edm.String'},
    errorCode: {type: 'Edm.Int32'},
    failureReason: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SignInStatus>;