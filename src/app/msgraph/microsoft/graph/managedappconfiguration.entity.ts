import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { KeyValuePair } from './keyvaluepair.entity';
//#endregion

export interface ManagedAppConfiguration extends ManagedAppPolicy {
  //#region ODataApi Properties
  customSettings: KeyValuePair[];
  //#endregion
}