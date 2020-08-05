import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { StandardTimeZoneOffset } from './standardtimezoneoffset.entity';
//#endregion

export const StandardTimeZoneOffsetConfig = {
  name: "standardTimeZoneOffset",
  annotations: [],
  fields: {
    time: {type: 'Edm.TimeOfDay'},
    dayOccurrence: {type: 'Edm.Int32'},
    dayOfWeek: {type: 'graph.dayOfWeek'},
    month: {type: 'Edm.Int32'},
    year: {type: 'Edm.Int32'}
  }
} as EntityConfig<StandardTimeZoneOffset>;