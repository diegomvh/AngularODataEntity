import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Segment } from './segment.entity';
//#endregion

export const SegmentConfig = {
  name: "segment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    caller: {type: 'microsoft.graph.callRecords.endpoint'},
    callee: {type: 'microsoft.graph.callRecords.endpoint'},
    failureInfo: {type: 'microsoft.graph.callRecords.failureInfo'},
    media: {type: 'microsoft.graph.callRecords.media', collection: true}
  }
} as EntityConfig<Segment>;