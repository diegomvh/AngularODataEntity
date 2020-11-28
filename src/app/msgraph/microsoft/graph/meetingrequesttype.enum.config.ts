import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingRequestType } from './meetingrequesttype.enum';
//#endregion

export const MeetingRequestTypeConfig = {
  name: "meetingRequestType",
  members: MeetingRequestType
} as EnumTypeConfig<MeetingRequestType>;