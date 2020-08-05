import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingMessageType } from './meetingmessagetype.enum';
//#endregion

export const MeetingMessageTypeConfig = {
  name: "meetingMessageType",
  members: MeetingMessageType
} as EnumConfig<MeetingMessageType>;