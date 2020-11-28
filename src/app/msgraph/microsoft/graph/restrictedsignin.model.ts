import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SignInModel } from './signin.model';
import { RestrictedSignIn } from './restrictedsignin.entity';
import { RestrictedSignInCollection } from './restrictedsignin.collection';
//#endregion

export class RestrictedSignInModel<E extends RestrictedSignIn> extends SignInModel<E> {
  //#region ODataApi Properties
  targetTenantId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}