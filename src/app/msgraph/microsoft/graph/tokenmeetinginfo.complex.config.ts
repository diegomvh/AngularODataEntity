import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TokenMeetingInfo } from './tokenmeetinginfo.complex';
import { TokenMeetingInfoModel } from './tokenmeetinginfo.model';
import { TokenMeetingInfoCollection } from './tokenmeetinginfo.collection';
//#endregion

export const TokenMeetingInfoConfig = {
  name: "tokenMeetingInfo",
  base: "microsoft.graph.meetingInfo",
  model: TokenMeetingInfoModel,
  collection: TokenMeetingInfoCollection,
  annotations: [],
  fields: {
    token: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<TokenMeetingInfo>;