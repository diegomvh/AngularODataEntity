//#region ODataApi Imports
//#endregion

export const ISFLAGS_DEVICEREGISTRATIONSTATE = false;
export enum DeviceRegistrationState {
  //#region ODataApi Members
  notRegistered = 0,
  registered = 2,
  revoked = 3,
  keyConflict = 4,
  approvalPending = 5,
  certificateReset = 6,
  notRegisteredPendingEnrollment = 7,
  unknown = 8,
  //#endregion
}
