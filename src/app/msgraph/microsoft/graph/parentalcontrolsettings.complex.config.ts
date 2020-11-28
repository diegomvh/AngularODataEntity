import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ParentalControlSettings } from './parentalcontrolsettings.complex';
import { ParentalControlSettingsModel } from './parentalcontrolsettings.model';
import { ParentalControlSettingsCollection } from './parentalcontrolsettings.collection';
//#endregion

export const ParentalControlSettingsConfig = {
  name: "parentalControlSettings",
  model: ParentalControlSettingsModel,
  collection: ParentalControlSettingsCollection,
  annotations: [],
  fields: {
    countriesBlockedForMinors: {type: 'Edm.String', collection: true},
    legalAgeGroupRule: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ParentalControlSettings>;