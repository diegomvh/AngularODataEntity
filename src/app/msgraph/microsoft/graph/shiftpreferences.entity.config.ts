import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftPreferences } from './shiftpreferences.entity';
import { ShiftPreferencesModel } from './shiftpreferences.model';
import { ShiftPreferencesCollection } from './shiftpreferences.collection';
//#endregion

export const ShiftPreferencesConfig = {
  name: "shiftPreferences",
  base: "microsoft.graph.changeTrackedEntity",
  model: ShiftPreferencesModel,
  collection: ShiftPreferencesCollection,
  annotations: [],
  fields: {
    availability: {type: 'graph.shiftAvailability', collection: true}
  }
} as EntityConfig<ShiftPreferences>;