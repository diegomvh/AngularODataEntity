﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosUpdatesInstallStatus } from './iosupdatesinstallstatus.enum';
//#endregion

export const IosUpdatesInstallStatusConfig = {
  name: "iosUpdatesInstallStatus",
  members: IosUpdatesInstallStatus
} as EnumConfig<IosUpdatesInstallStatus>;