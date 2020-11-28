import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppStatus } from './managedappstatus.entity';
import { Json } from './json.entity';
import { JsonModel } from './json.model';
import { ManagedAppStatusModel } from './managedappstatus.model';
import { JsonCollection } from './json.collection';
import { ManagedAppStatusCollection } from './managedappstatus.collection';
//#endregion

export interface ManagedAppStatusRaw extends ManagedAppStatus {
  //#region ODataApi Properties
  content?: Json;
  //#endregion
}