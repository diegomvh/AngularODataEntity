import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { StandardTimeZoneOffset } from './standardtimezoneoffset.complex';
import { StandardTimeZoneOffsetModel } from './standardtimezoneoffset.model';
import { StandardTimeZoneOffsetCollection } from './standardtimezoneoffset.collection';
//#endregion

export const StandardTimeZoneOffsetConfig = {
  name: "standardTimeZoneOffset",
  model: StandardTimeZoneOffsetModel,
  collection: StandardTimeZoneOffsetCollection,
  annotations: [],
  fields: {
    dayOccurrence: {type: 'Edm.Int32'},
    dayOfWeek: {type: 'graph.dayOfWeek'},
    month: {type: 'Edm.Int32'},
    time: {type: 'Edm.TimeOfDay'},
    year: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<StandardTimeZoneOffset>;