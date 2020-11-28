import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserIdentity } from './useridentity.complex';
import { UserIdentityCollection } from './useridentity.collection';
//#endregion

export class UserIdentityModel<E extends UserIdentity> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  id?: string;
  ipAddress?: string;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}