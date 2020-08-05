import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingRequestType } from './meetingrequesttype.enum';
//#endregion

export const MeetingRequestTypeConfig = {
  name: "MeetingRequestType",
  members: MeetingRequestType
} as EnumConfig<MeetingRequestType>;