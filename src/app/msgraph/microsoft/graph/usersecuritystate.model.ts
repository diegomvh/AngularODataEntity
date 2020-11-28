import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EmailRole } from './emailrole.enum';
import { LogonType } from './logontype.enum';
import { UserAccountSecurityType } from './useraccountsecuritytype.enum';
import { UserSecurityState } from './usersecuritystate.complex';
import { UserSecurityStateCollection } from './usersecuritystate.collection';
//#endregion

export class UserSecurityStateModel<E extends UserSecurityState> extends ODataModel<E> {
  //#region ODataApi Properties
  aadUserId?: string;
  accountName?: string;
  domainName?: string;
  emailRole?: EmailRole;
  isVpn?: boolean;
  logonDateTime?: Date;
  logonId?: string;
  logonIp?: string;
  logonLocation?: string;
  logonType?: LogonType;
  onPremisesSecurityIdentifier?: string;
  riskScore?: string;
  userAccountType?: UserAccountSecurityType;
  userPrincipalName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}