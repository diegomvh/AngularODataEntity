import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
//#endregion

export const ManagedAppFlaggedReasonConfig = {
  name: "ManagedAppFlaggedReason",
  members: ManagedAppFlaggedReason
} as EnumConfig<ManagedAppFlaggedReason>;