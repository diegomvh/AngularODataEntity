import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppIdentity } from './appidentity.complex';
import { AppIdentityCollection } from './appidentity.collection';
//#endregion

export class AppIdentityModel<E extends AppIdentity> extends ODataModel<E> {
  //#region ODataApi Properties
  appId?: string;
  displayName?: string;
  servicePrincipalId?: string;
  servicePrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}