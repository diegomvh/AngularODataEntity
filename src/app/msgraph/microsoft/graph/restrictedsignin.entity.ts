import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SignIn } from './signin.entity';
import { SignInModel } from './signin.model';
import { SignInCollection } from './signin.collection';
//#endregion

export interface RestrictedSignIn extends SignIn {
  //#region ODataApi Properties
  targetTenantId?: string;
  //#endregion
}