import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SignInStatus } from './signinstatus.complex';
import { SignInStatusModel } from './signinstatus.model';
//#endregion

export class SignInStatusCollection<E extends SignInStatus, M extends SignInStatusModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}