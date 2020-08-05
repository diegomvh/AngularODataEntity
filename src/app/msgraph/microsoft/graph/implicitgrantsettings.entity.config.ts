import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.entity';
//#endregion

export const ImplicitGrantSettingsConfig = {
  name: "ImplicitGrantSettings",
  annotations: [],
  fields: {
    enableIdTokenIssuance: {type: 'Edm.Boolean'},
    enableAccessTokenIssuance: {type: 'Edm.Boolean'}
  }
} as EntityConfig<ImplicitGrantSettings>;