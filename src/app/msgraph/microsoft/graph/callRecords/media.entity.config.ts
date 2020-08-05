import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Media } from './media.entity';
//#endregion

export const MediaConfig = {
  name: "media",
  annotations: [],
  fields: {
    label: {type: 'Edm.String'},
    callerNetwork: {type: 'microsoft.graph.callRecords.networkInfo'},
    calleeNetwork: {type: 'microsoft.graph.callRecords.networkInfo'},
    callerDevice: {type: 'microsoft.graph.callRecords.deviceInfo'},
    calleeDevice: {type: 'microsoft.graph.callRecords.deviceInfo'},
    streams: {type: 'microsoft.graph.callRecords.mediaStream', collection: true}
  }
} as EntityConfig<Media>;