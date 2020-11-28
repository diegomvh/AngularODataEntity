import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CallRecord } from './callrecord.entity';
import { CallRecordModel } from './callrecord.model';
import { CallRecordCollection } from './callrecord.collection';
//#endregion

export const CallRecordConfig = {
  name: "callRecord",
  base: "microsoft.graph.entity",
  model: CallRecordModel,
  collection: CallRecordCollection,
  annotations: [],
  fields: {
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    joinWebUrl: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    modalities: {type: 'microsoft.graph.callRecords.modality', nullable: false, collection: true},
    organizer: {type: 'graph.identitySet'},
    participants: {type: 'graph.identitySet', collection: true},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    type: {type: 'microsoft.graph.callRecords.callType', nullable: false},
    version: {type: 'Edm.Int64', nullable: false},
    sessions: {type: 'microsoft.graph.callRecords.session', collection: true, navigation: true}
  }
} as EntityConfig<CallRecord>;