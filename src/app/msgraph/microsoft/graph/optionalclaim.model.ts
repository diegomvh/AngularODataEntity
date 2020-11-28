import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OptionalClaim } from './optionalclaim.entity';
import { OptionalClaimCollection } from './optionalclaim.collection';
//#endregion

export class OptionalClaimModel<E extends OptionalClaim> extends ODataModel<E> {
  //#region ODataApi Properties
  additionalProperties?: string[];
  essential: boolean;
  name: string;
  source?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}