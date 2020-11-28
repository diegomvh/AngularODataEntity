import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
//#endregion

export const ManagedAppDataTransferLevelConfig = {
  name: "managedAppDataTransferLevel",
  members: ManagedAppDataTransferLevel
} as EnumTypeConfig<ManagedAppDataTransferLevel>;