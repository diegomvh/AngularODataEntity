import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.entity';
import { SamlSingleSignOnSettingsModel } from './samlsinglesignonsettings.model';
import { SamlSingleSignOnSettingsCollection } from './samlsinglesignonsettings.collection';
//#endregion

export const SamlSingleSignOnSettingsConfig = {
  name: "samlSingleSignOnSettings",
  model: SamlSingleSignOnSettingsModel,
  collection: SamlSingleSignOnSettingsCollection,
  annotations: [],
  fields: {
    relayState: {type: 'Edm.String'}
  }
} as EntityConfig<SamlSingleSignOnSettings>;