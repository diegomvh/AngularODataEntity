import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallRecord } from './callrecord.entity';
//#endregion

export const CallRecordConfig = {
  name: "callRecord",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    version: {type: 'Edm.Int64', nullable: false},
    type: {type: 'microsoft.graph.callRecords.callType', nullable: false},
    modalities: {type: 'microsoft.graph.callRecords.modality', nullable: false, collection: true},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    organizer: {type: 'graph.identitySet'},
    participants: {type: 'graph.identitySet', collection: true},
    joinWebUrl: {type: 'Edm.String'},
    sessions: {type: 'microsoft.graph.callRecords.session', collection: true, navigation: true}
  }
} as EntityConfig<CallRecord>;