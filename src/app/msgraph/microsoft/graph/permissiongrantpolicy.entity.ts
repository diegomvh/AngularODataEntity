import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
import { PermissionGrantConditionSet } from './permissiongrantconditionset.entity';
import { PolicyBaseModel } from './policybase.model';
import { PermissionGrantConditionSetModel } from './permissiongrantconditionset.model';
import { PolicyBaseCollection } from './policybase.collection';
import { PermissionGrantConditionSetCollection } from './permissiongrantconditionset.collection';
//#endregion

export interface PermissionGrantPolicy extends PolicyBase {
  //#region ODataApi Properties
  excludes?: PermissionGrantConditionSet[];
  includes?: PermissionGrantConditionSet[];
  //#endregion
}