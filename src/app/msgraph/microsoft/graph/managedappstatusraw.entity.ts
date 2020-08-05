import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppStatus } from './managedappstatus.entity';
import { Json } from './json.entity';
//#endregion

export interface ManagedAppStatusRaw extends ManagedAppStatus {
  //#region ODataApi Properties
  content?: Json;
  //#endregion
}