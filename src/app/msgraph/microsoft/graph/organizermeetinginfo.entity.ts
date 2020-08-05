import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.entity';
import { IdentitySet } from './identityset.entity';
//#endregion

export interface OrganizerMeetingInfo extends MeetingInfo {
  //#region ODataApi Properties
  organizer: IdentitySet;
  //#endregion
}