import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Segment } from './segment.entity';
import { SegmentModel } from './segment.model';
import { SegmentCollection } from './segment.collection';
//#endregion

export const SegmentConfig = {
  name: "segment",
  base: "microsoft.graph.entity",
  model: SegmentModel,
  collection: SegmentCollection,
  annotations: [],
  fields: {
    callee: {type: 'microsoft.graph.callRecords.endpoint'},
    caller: {type: 'microsoft.graph.callRecords.endpoint'},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    failureInfo: {type: 'microsoft.graph.callRecords.failureInfo'},
    media: {type: 'microsoft.graph.callRecords.media', collection: true},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<Segment>;