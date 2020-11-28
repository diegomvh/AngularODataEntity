import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.complex';
import { MeetingInfoModel } from './meetinginfo.model';
import { MeetingInfoCollection } from './meetinginfo.collection';
//#endregion

export const MeetingInfoConfig = {
  name: "meetingInfo",
  model: MeetingInfoModel,
  collection: MeetingInfoCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<MeetingInfo>;