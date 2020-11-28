import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OptionalClaims } from './optionalclaims.complex';
import { OptionalClaim } from './optionalclaim.complex';
import { OptionalClaimsModel } from './optionalclaims.model';
import { OptionalClaimModel } from './optionalclaim.model';
import { OptionalClaimCollection } from './optionalclaim.collection';
//#endregion

export class OptionalClaimsCollection<E extends OptionalClaims, M extends OptionalClaimsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}