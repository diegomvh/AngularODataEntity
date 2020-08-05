import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftPreferences } from './shiftpreferences.entity';
//#endregion

export const ShiftPreferencesConfig = {
  name: "shiftPreferences",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    availability: {type: 'graph.shiftAvailability', collection: true}
  }
} as EntityConfig<ShiftPreferences>;