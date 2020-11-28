import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrenceRange } from './recurrencerange.entity';
import { RecurrenceRangeModel } from './recurrencerange.model';
import { RecurrenceRangeCollection } from './recurrencerange.collection';
//#endregion

export const RecurrenceRangeConfig = {
  name: "recurrenceRange",
  model: RecurrenceRangeModel,
  collection: RecurrenceRangeCollection,
  annotations: [],
  fields: {
    endDate: {type: 'Edm.Date'},
    numberOfOccurrences: {type: 'Edm.Int32', nullable: false},
    recurrenceTimeZone: {type: 'Edm.String'},
    startDate: {type: 'Edm.Date'},
    type: {type: 'graph.recurrenceRangeType'}
  }
} as EntityConfig<RecurrenceRange>;