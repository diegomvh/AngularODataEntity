import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PasswordProfile {
  //#region ODataApi Properties
  forceChangePasswordNextSignIn?: boolean;
  forceChangePasswordNextSignInWithMfa?: boolean;
  password?: string;
  //#endregion
}