import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallTranscriptionInfo } from './calltranscriptioninfo.entity';
import { CallTranscriptionInfoModel } from './calltranscriptioninfo.model';
import { CallTranscriptionInfoCollection } from './calltranscriptioninfo.collection';
//#endregion

export const CallTranscriptionInfoConfig = {
  name: "callTranscriptionInfo",
  model: CallTranscriptionInfoModel,
  collection: CallTranscriptionInfoCollection,
  annotations: [],
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    state: {type: 'graph.callTranscriptionState', nullable: false}
  }
} as EntityConfig<CallTranscriptionInfo>;