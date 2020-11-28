import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OptionalClaim } from './optionalclaim.complex';
import { OptionalClaimModel } from './optionalclaim.model';
//#endregion

export class OptionalClaimCollection<E extends OptionalClaim, M extends OptionalClaimModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}