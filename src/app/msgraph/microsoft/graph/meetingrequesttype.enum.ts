//#region ODataApi Imports
//#endregion

export const ISFLAGS_MEETINGREQUESTTYPE = false;
export enum MeetingRequestType {
  //#region ODataApi Members
  none = 0,
  newMeetingRequest = 1,
  fullUpdate = 65536,
  informationalUpdate = 131072,
  silentUpdate = 262144,
  outdated = 524288,
  principalWantsCopy = 1048576,
  //#endregion
}
