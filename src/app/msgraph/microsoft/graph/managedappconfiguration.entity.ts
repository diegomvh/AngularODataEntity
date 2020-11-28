import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { KeyValuePair } from './keyvaluepair.complex';
import { KeyValuePairModel } from './keyvaluepair.model';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
//#endregion

export interface ManagedAppConfiguration extends ManagedAppPolicy {
  //#region ODataApi Properties
  customSettings: KeyValuePair[];
  //#endregion
}