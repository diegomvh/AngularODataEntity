//#region ODataApi Imports
//#endregion

export const ISFLAGS_ALERTSTATUS = false;
export enum AlertStatus {
  //#region ODataApi Members
  unknown = 0,
  newAlert = 1,
  inProgress = 2,
  resolved = 3,
  dismissed = 4,
  unknownFutureValue = 127,
  //#endregion
}
