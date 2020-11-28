import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeetingInfo } from './onlinemeetinginfo.complex';
import { OnlineMeetingInfoModel } from './onlinemeetinginfo.model';
import { OnlineMeetingInfoCollection } from './onlinemeetinginfo.collection';
//#endregion

export const OnlineMeetingInfoConfig = {
  name: "onlineMeetingInfo",
  model: OnlineMeetingInfoModel,
  collection: OnlineMeetingInfoCollection,
  annotations: [],
  fields: {
    conferenceId: {type: 'Edm.String'},
    joinUrl: {type: 'Edm.String'},
    phones: {type: 'graph.phone', collection: true},
    quickDial: {type: 'Edm.String'},
    tollFreeNumbers: {type: 'Edm.String', collection: true},
    tollNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnlineMeetingInfo>;