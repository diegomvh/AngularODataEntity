import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeetingInfo } from './onlinemeetinginfo.entity';
//#endregion

export const OnlineMeetingInfoConfig = {
  name: "OnlineMeetingInfo",
  annotations: [],
  fields: {
    joinUrl: {type: 'Edm.String'},
    conferenceId: {type: 'Edm.String'},
    tollNumber: {type: 'Edm.String'},
    tollFreeNumbers: {type: 'Edm.String', collection: true},
    quickDial: {type: 'Edm.String'},
    phones: {type: 'graph.phone', collection: true}
  }
} as EntityConfig<OnlineMeetingInfo>;