import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CloudCommunications } from './cloudcommunications.entity';
//#endregion

export const CloudCommunicationsConfig = {
  name: "cloudCommunications",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    calls: {type: 'graph.call', collection: true, navigation: true},
    callRecords: {type: 'microsoft.graph.callRecords.callRecord', collection: true, navigation: true},
    onlineMeetings: {type: 'graph.onlineMeeting', collection: true, navigation: true}
  }
} as EntityConfig<CloudCommunications>;