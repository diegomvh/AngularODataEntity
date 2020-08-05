import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecurrencePattern } from './recurrencepattern.entity';
//#endregion

export const RecurrencePatternConfig = {
  name: "RecurrencePattern",
  annotations: [],
  fields: {
    type: {type: 'graph.recurrencePatternType'},
    interval: {type: 'Edm.Int32', nullable: false},
    month: {type: 'Edm.Int32', nullable: false},
    dayOfMonth: {type: 'Edm.Int32', nullable: false},
    daysOfWeek: {type: 'graph.dayOfWeek', collection: true},
    firstDayOfWeek: {type: 'graph.dayOfWeek'},
    index: {type: 'graph.weekIndex'}
  }
} as EntityConfig<RecurrencePattern>;