import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
//#endregion

export const ManagedAppDataTransferLevelConfig = {
  name: "ManagedAppDataTransferLevel",
  members: ManagedAppDataTransferLevel
} as EnumConfig<ManagedAppDataTransferLevel>;