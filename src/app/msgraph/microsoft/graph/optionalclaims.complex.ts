import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OptionalClaim } from './optionalclaim.complex';
import { OptionalClaimModel } from './optionalclaim.model';
import { OptionalClaimCollection } from './optionalclaim.collection';
//#endregion

export interface OptionalClaims {
  //#region ODataApi Properties
  accessToken?: OptionalClaim[];
  idToken?: OptionalClaim[];
  saml2Token?: OptionalClaim[];
  //#endregion
}