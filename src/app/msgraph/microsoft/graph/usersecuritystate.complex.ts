import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EmailRole } from './emailrole.enum';
import { LogonType } from './logontype.enum';
import { UserAccountSecurityType } from './useraccountsecuritytype.enum';
//#endregion

export interface UserSecurityState {
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
}