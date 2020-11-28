import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
//#endregion

export const ManagedAppFlaggedReasonConfig = {
  name: "managedAppFlaggedReason",
  members: ManagedAppFlaggedReason
} as EnumTypeConfig<ManagedAppFlaggedReason>;