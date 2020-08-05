import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OptionalClaim } from './optionalclaim.entity';
//#endregion

export interface OptionalClaims {
  //#region ODataApi Properties
  idToken?: OptionalClaim[];
  accessToken?: OptionalClaim[];
  saml2Token?: OptionalClaim[];
  //#endregion
}