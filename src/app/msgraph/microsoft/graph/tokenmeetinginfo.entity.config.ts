import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TokenMeetingInfo } from './tokenmeetinginfo.entity';
//#endregion

export const TokenMeetingInfoConfig = {
  name: "tokenMeetingInfo",
  base: "microsoft.graph.meetingInfo",
  annotations: [],
  fields: {
    token: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<TokenMeetingInfo>;