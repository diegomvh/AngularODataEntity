import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudCommunications } from './cloudcommunications.entity';
import { CloudCommunicationsModel } from './cloudcommunications.model';
import { CloudCommunicationsCollection } from './cloudcommunications.collection';
//#endregion

export const CloudCommunicationsConfig = {
  name: "cloudCommunications",
  base: "microsoft.graph.entity",
  model: CloudCommunicationsModel,
  collection: CloudCommunicationsCollection,
  annotations: [],
  fields: {
    calls: {type: 'graph.call', collection: true, navigation: true},
    callRecords: {type: 'microsoft.graph.callRecords.callRecord', collection: true, navigation: true},
    onlineMeetings: {type: 'graph.onlineMeeting', collection: true, navigation: true}
  }
} as StructuredTypeConfig<CloudCommunications>;