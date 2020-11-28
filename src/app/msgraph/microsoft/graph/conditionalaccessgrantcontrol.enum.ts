//#region ODataApi Imports
//#endregion

export const ISFLAGS_CONDITIONALACCESSGRANTCONTROL = false;
export enum ConditionalAccessGrantControl {
  //#region ODataApi Members
  block = 0,
  mfa = 1,
  compliantDevice = 2,
  domainJoinedDevice = 3,
  approvedApplication = 4,
  compliantApplication = 5,
  unknownFutureValue = 6,
  //#endregion
}
