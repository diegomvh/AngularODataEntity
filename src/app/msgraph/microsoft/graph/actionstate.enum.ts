﻿//#region ODataApi Imports
//#endregion

export const ISFLAGS_ACTIONSTATE = false;
export enum ActionState {
  //#region ODataApi Members
  none = 0,
  pending = 1,
  canceled = 2,
  active = 3,
  done = 4,
  failed = 5,
  notSupported = 6,
  //#endregion
}
