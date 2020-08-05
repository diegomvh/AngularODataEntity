import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
//#endregion

export const PatternedRecurrenceConfig = {
  name: "patternedRecurrence",
  annotations: [],
  fields: {
    pattern: {type: 'graph.recurrencePattern'},
    range: {type: 'graph.recurrenceRange'}
  }
} as EntityConfig<PatternedRecurrence>;