//#region ODataApi Imports
//#endregion

export const ISFLAGS_CALENDARROLETYPE = false;
export enum CalendarRoleType {
  //#region ODataApi Members
  none = 0,
  freeBusyRead = 1,
  limitedRead = 2,
  read = 3,
  write = 4,
  delegateWithoutPrivateEventAccess = 5,
  delegateWithPrivateEventAccess = 6,
  custom = 7,
  //#endregion
}
