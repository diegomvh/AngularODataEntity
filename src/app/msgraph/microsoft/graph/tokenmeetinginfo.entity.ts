import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.entity';
//#endregion

export interface TokenMeetingInfo extends MeetingInfo {
  //#region ODataApi Properties
  token: string;
  //#endregion
}