//#region ODataApi Imports
//#endregion

export const ISFLAGS_TASKSTATUS = false;
export enum TaskStatus {
  //#region ODataApi Members
  notStarted = 0,
  inProgress = 1,
  completed = 2,
  waitingOnOthers = 3,
  deferred = 4,
  //#endregion
}
