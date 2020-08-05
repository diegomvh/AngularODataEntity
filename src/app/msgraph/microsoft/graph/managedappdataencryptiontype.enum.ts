//#region ODataApi Imports
//#endregion

export const ISFLAGS_MANAGEDAPPDATAENCRYPTIONTYPE = false;
export enum ManagedAppDataEncryptionType {
  //#region ODataApi Members
  useDeviceSettings = 0,
  afterDeviceRestart = 1,
  whenDeviceLockedExceptOpenFiles = 2,
  whenDeviceLocked = 3,
  //#endregion
}
