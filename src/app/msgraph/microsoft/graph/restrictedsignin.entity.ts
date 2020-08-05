import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SignIn } from './signin.entity';
//#endregion

export interface RestrictedSignIn extends SignIn {
  //#region ODataApi Properties
  targetTenantId?: string;
  //#endregion
}