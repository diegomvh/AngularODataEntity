import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.entity';
//#endregion

export const MeetingInfoConfig = {
  name: "meetingInfo",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MeetingInfo>;