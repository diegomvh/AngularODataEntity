import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrganizerMeetingInfo } from './organizermeetinginfo.entity';
//#endregion

export const OrganizerMeetingInfoConfig = {
  name: "OrganizerMeetingInfo",
  base: "microsoft.graph.meetingInfo",
  open: true,
  annotations: [],
  fields: {
    organizer: {type: 'graph.identitySet', nullable: false}
  }
} as EntityConfig<OrganizerMeetingInfo>;