import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
//#endregion

export interface MeetingParticipants {
  //#region ODataApi Properties
  organizer?: MeetingParticipantInfo;
  attendees?: MeetingParticipantInfo[];
  //#endregion
}