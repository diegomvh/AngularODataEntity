import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OptionalClaims } from './optionalclaims.complex';
import { OptionalClaim } from './optionalclaim.complex';
import { OptionalClaimModel } from './optionalclaim.model';
import { OptionalClaimsCollection } from './optionalclaims.collection';
import { OptionalClaimCollection } from './optionalclaim.collection';
//#endregion

export class OptionalClaimsModel<E extends OptionalClaims> extends ODataModel<E> {
  //#region ODataApi Properties
  accessToken?: OptionalClaimCollection<OptionalClaim, OptionalClaimModel<OptionalClaim>>;
  idToken?: OptionalClaimCollection<OptionalClaim, OptionalClaimModel<OptionalClaim>>;
  saml2Token?: OptionalClaimCollection<OptionalClaim, OptionalClaimModel<OptionalClaim>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}