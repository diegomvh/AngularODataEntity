import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Session } from './session.entity';
//#endregion

export const SessionConfig = {
  name: "Session",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    modalities: {type: 'microsoft.graph.callRecords.modality', nullable: false, collection: true},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    caller: {type: 'microsoft.graph.callRecords.endpoint'},
    callee: {type: 'microsoft.graph.callRecords.endpoint'},
    failureInfo: {type: 'microsoft.graph.callRecords.failureInfo'},
    segments: {type: 'microsoft.graph.callRecords.segment', collection: true, navigation: true}
  }
} as EntityConfig<Session>;