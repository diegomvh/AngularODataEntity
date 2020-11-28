import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecordingInfo } from './recordinginfo.entity';
import { RecordingInfoModel } from './recordinginfo.model';
import { RecordingInfoCollection } from './recordinginfo.collection';
//#endregion

export const RecordingInfoConfig = {
  name: "recordingInfo",
  model: RecordingInfoModel,
  collection: RecordingInfoCollection,
  annotations: [],
  fields: {
    initiator: {type: 'graph.identitySet'},
    recordingStatus: {type: 'graph.recordingStatus', nullable: false}
  }
} as EntityConfig<RecordingInfo>;