import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
import { PolicyBaseModel } from './policybase.model';
import { PolicyBaseCollection } from './policybase.collection';
//#endregion

export interface IdentitySecurityDefaultsEnforcementPolicy extends PolicyBase {
  //#region ODataApi Properties
  isEnabled: boolean;
  //#endregion
}