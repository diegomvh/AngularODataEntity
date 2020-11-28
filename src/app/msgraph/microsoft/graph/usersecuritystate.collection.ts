import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmailRole } from './emailrole.enum';
import { LogonType } from './logontype.enum';
import { UserAccountSecurityType } from './useraccountsecuritytype.enum';
import { UserSecurityState } from './usersecuritystate.complex';
import { UserSecurityStateModel } from './usersecuritystate.model';
//#endregion

export class UserSecurityStateCollection<E extends UserSecurityState, M extends UserSecurityStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}