import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrganizerMeetingInfo } from './organizermeetinginfo.entity';
import { OrganizerMeetingInfoModel } from './organizermeetinginfo.model';
import { OrganizerMeetingInfoCollection } from './organizermeetinginfo.collection';
//#endregion

export const OrganizerMeetingInfoConfig = {
  name: "organizerMeetingInfo",
  base: "microsoft.graph.meetingInfo",
  open: true,
  model: OrganizerMeetingInfoModel,
  collection: OrganizerMeetingInfoCollection,
  annotations: [],
  fields: {
    organizer: {type: 'graph.identitySet', nullable: false}
  }
} as EntityConfig<OrganizerMeetingInfo>;