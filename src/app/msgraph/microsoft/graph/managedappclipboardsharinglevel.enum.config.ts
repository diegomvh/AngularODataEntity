import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppClipboardSharingLevel } from './managedappclipboardsharinglevel.enum';
//#endregion

export const ManagedAppClipboardSharingLevelConfig = {
  name: "ManagedAppClipboardSharingLevel",
  members: ManagedAppClipboardSharingLevel
} as EnumConfig<ManagedAppClipboardSharingLevel>;