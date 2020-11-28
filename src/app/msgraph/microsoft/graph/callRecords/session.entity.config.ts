import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Session } from './session.entity';
import { SessionModel } from './session.model';
import { SessionCollection } from './session.collection';
//#endregion

export const SessionConfig = {
  name: "session",
  base: "microsoft.graph.entity",
  model: SessionModel,
  collection: SessionCollection,
  annotations: [],
  fields: {
    callee: {type: 'microsoft.graph.callRecords.endpoint'},
    caller: {type: 'microsoft.graph.callRecords.endpoint'},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    failureInfo: {type: 'microsoft.graph.callRecords.failureInfo'},
    modalities: {type: 'microsoft.graph.callRecords.modality', nullable: false, collection: true},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    segments: {type: 'microsoft.graph.callRecords.segment', collection: true, navigation: true}
  }
} as EntityConfig<Session>;