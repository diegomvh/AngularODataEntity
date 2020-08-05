import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecordingInfo } from './recordinginfo.entity';
//#endregion

export const RecordingInfoConfig = {
  name: "recordingInfo",
  annotations: [],
  fields: {
    recordingStatus: {type: 'graph.recordingStatus', nullable: false},
    initiator: {type: 'graph.identitySet'}
  }
} as EntityConfig<RecordingInfo>;