import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
//#endregion

export const ParentalControlSettingsConfig = {
  name: "parentalControlSettings",
  annotations: [],
  fields: {
    countriesBlockedForMinors: {type: 'Edm.String', collection: true},
    legalAgeGroupRule: {type: 'Edm.String'}
  }
} as EntityConfig<ParentalControlSettings>;