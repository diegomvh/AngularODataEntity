import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppAvailability } from './managedappavailability.enum';
//#endregion

export const ManagedAppAvailabilityConfig = {
  name: "ManagedAppAvailability",
  members: ManagedAppAvailability
} as EnumConfig<ManagedAppAvailability>;