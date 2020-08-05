import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
//#endregion

export interface IdentitySecurityDefaultsEnforcementPolicy extends PolicyBase {
  //#region ODataApi Properties
  isEnabled: boolean;
  //#endregion
}