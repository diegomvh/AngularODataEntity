import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePattern } from './recurrencepattern.entity';
import { RecurrencePatternModel } from './recurrencepattern.model';
import { RecurrencePatternCollection } from './recurrencepattern.collection';
//#endregion

export const RecurrencePatternConfig = {
  name: "recurrencePattern",
  model: RecurrencePatternModel,
  collection: RecurrencePatternCollection,
  annotations: [],
  fields: {
    dayOfMonth: {type: 'Edm.Int32', nullable: false},
    daysOfWeek: {type: 'graph.dayOfWeek', collection: true},
    firstDayOfWeek: {type: 'graph.dayOfWeek'},
    index: {type: 'graph.weekIndex'},
    interval: {type: 'Edm.Int32', nullable: false},
    month: {type: 'Edm.Int32', nullable: false},
    type: {type: 'graph.recurrencePatternType'}
  }
} as EntityConfig<RecurrencePattern>;