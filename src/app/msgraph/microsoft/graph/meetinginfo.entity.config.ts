import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MeetingInfo } from './meetinginfo.entity';
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
} as EntityConfig<MeetingInfo>;