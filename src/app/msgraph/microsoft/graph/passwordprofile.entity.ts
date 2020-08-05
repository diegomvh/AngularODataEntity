import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PasswordProfile {
  //#region ODataApi Properties
  password?: string;
  forceChangePasswordNextSignIn?: boolean;
  forceChangePasswordNextSignInWithMfa?: boolean;
  //#endregion
}