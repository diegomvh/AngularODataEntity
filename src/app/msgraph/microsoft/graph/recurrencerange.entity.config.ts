import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrenceRange } from './recurrencerange.entity';
//#endregion

export const RecurrenceRangeConfig = {
  name: "recurrenceRange",
  annotations: [],
  fields: {
    type: {type: 'graph.recurrenceRangeType'},
    startDate: {type: 'Edm.Date'},
    endDate: {type: 'Edm.Date'},
    recurrenceTimeZone: {type: 'Edm.String'},
    numberOfOccurrences: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<RecurrenceRange>;