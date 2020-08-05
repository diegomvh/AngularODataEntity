import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.entity';
//#endregion

export const SamlSingleSignOnSettingsConfig = {
  name: "samlSingleSignOnSettings",
  annotations: [],
  fields: {
    relayState: {type: 'Edm.String'}
  }
} as EntityConfig<SamlSingleSignOnSettings>;