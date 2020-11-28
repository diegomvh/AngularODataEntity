import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.entity';
import { ImplicitGrantSettingsModel } from './implicitgrantsettings.model';
import { ImplicitGrantSettingsCollection } from './implicitgrantsettings.collection';
//#endregion

export const ImplicitGrantSettingsConfig = {
  name: "implicitGrantSettings",
  model: ImplicitGrantSettingsModel,
  collection: ImplicitGrantSettingsCollection,
  annotations: [],
  fields: {
    enableAccessTokenIssuance: {type: 'Edm.Boolean'},
    enableIdTokenIssuance: {type: 'Edm.Boolean'}
  }
} as EntityConfig<ImplicitGrantSettings>;