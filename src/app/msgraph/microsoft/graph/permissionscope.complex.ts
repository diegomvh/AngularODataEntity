import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PermissionScope {
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
}