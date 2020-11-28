import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.complex';
import { MeetingInfoModel } from './meetinginfo.model';
import { MeetingInfoCollection } from './meetinginfo.collection';
//#endregion

export interface TokenMeetingInfo extends MeetingInfo {
  //#region ODataApi Properties
  token: string;
  //#endregion
}