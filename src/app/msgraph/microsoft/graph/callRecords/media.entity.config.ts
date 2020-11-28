import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Media } from './media.entity';
import { MediaModel } from './media.model';
import { MediaCollection } from './media.collection';
//#endregion

export const MediaConfig = {
  name: "media",
  model: MediaModel,
  collection: MediaCollection,
  annotations: [],
  fields: {
    calleeDevice: {type: 'microsoft.graph.callRecords.deviceInfo'},
    calleeNetwork: {type: 'microsoft.graph.callRecords.networkInfo'},
    callerDevice: {type: 'microsoft.graph.callRecords.deviceInfo'},
    callerNetwork: {type: 'microsoft.graph.callRecords.networkInfo'},
    label: {type: 'Edm.String'},
    streams: {type: 'microsoft.graph.callRecords.mediaStream', collection: true}
  }
} as EntityConfig<Media>;