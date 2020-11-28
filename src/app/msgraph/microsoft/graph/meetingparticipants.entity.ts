import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingParticipantInfo } from './meetingparticipantinfo.entity';
import { MeetingParticipantInfoModel } from './meetingparticipantinfo.model';
import { MeetingParticipantInfoCollection } from './meetingparticipantinfo.collection';
//#endregion

export interface MeetingParticipants {
  //#region ODataApi Properties
  attendees?: MeetingParticipantInfo[];
  organizer?: MeetingParticipantInfo;
  //#endregion
}