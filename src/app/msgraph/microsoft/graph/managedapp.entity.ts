import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileApp } from './mobileapp.entity';
import { ManagedAppAvailability } from './managedappavailability.enum';
//#endregion

export interface ManagedApp extends MobileApp {
  //#region ODataApi Properties
  appAvailability: ManagedAppAvailability;
  version?: string;
  //#endregion
}