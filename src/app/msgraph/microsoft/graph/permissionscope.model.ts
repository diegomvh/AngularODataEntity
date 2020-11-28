import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PermissionScope } from './permissionscope.complex';
import { PermissionScopeCollection } from './permissionscope.collection';
//#endregion

export class PermissionScopeModel<E extends PermissionScope> extends ODataModel<E> {
  //#region ODataApi Properties
  adminConsentDescription?: string;
  adminConsentDisplayName?: string;
  id: string;
  isEnabled: boolean;
  origin?: string;
  type?: string;
  userConsentDescription?: string;
  userConsentDisplayName?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}