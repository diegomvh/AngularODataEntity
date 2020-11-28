import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppAvailability } from './managedappavailability.enum';
//#endregion

export const ManagedAppAvailabilityConfig = {
  name: "managedAppAvailability",
  members: ManagedAppAvailability
} as EnumTypeConfig<ManagedAppAvailability>;