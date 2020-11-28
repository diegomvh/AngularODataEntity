import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SignInStatus } from './signinstatus.entity';
import { SignInStatusCollection } from './signinstatus.collection';
//#endregion

export class SignInStatusModel<E extends SignInStatus> extends ODataModel<E> {
  //#region ODataApi Properties
  additionalDetails?: string;
  errorCode?: number;
  failureReason?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}