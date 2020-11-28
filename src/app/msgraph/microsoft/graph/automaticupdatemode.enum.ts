//#region ODataApi Imports
//#endregion

export const ISFLAGS_AUTOMATICUPDATEMODE = false;
export enum AutomaticUpdateMode {
  //#region ODataApi Members
  userDefined = 0,
  notifyDownload = 1,
  autoInstallAtMaintenanceTime = 2,
  autoInstallAndRebootAtMaintenanceTime = 3,
  autoInstallAndRebootAtScheduledTime = 4,
  autoInstallAndRebootWithoutEndUserControl = 5,
  //#endregion
}
