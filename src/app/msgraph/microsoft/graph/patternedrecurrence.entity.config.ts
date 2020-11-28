import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { PatternedRecurrenceCollection } from './patternedrecurrence.collection';
//#endregion

export const PatternedRecurrenceConfig = {
  name: "patternedRecurrence",
  model: PatternedRecurrenceModel,
  collection: PatternedRecurrenceCollection,
  annotations: [],
  fields: {
    pattern: {type: 'graph.recurrencePattern'},
    range: {type: 'graph.recurrenceRange'}
  }
} as EntityConfig<PatternedRecurrence>;