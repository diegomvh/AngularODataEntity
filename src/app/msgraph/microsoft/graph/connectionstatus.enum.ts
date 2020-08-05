//#region ODataApi Imports
//#endregion

export const ISFLAGS_CONNECTIONSTATUS = false;
export enum ConnectionStatus {
  //#region ODataApi Members
  unknown = 0,
  attempted = 1,
  succeeded = 2,
  blocked = 3,
  failed = 4,
  unknownFutureValue = 127,
  //#endregion
}
