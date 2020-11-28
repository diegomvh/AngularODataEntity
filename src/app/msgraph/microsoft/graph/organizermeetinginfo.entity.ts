import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.entity';
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { MeetingInfoModel } from './meetinginfo.model';
import { IdentitySetCollection } from './identityset.collection';
import { MeetingInfoCollection } from './meetinginfo.collection';
//#endregion

export interface OrganizerMeetingInfo extends MeetingInfo {
  //#region ODataApi Properties
  organizer: IdentitySet;
  //#endregion
}