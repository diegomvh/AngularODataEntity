import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
import { OnPremisesConditionalAccessSettingsModel } from './onpremisesconditionalaccesssettings.model';
import { OnPremisesConditionalAccessSettingsCollection } from './onpremisesconditionalaccesssettings.collection';
//#endregion

export const OnPremisesConditionalAccessSettingsConfig = {
  name: "onPremisesConditionalAccessSettings",
  base: "microsoft.graph.entity",
  model: OnPremisesConditionalAccessSettingsModel,
  collection: OnPremisesConditionalAccessSettingsCollection,
  annotations: [],
  fields: {
    enabled: {type: 'Edm.Boolean', nullable: false},
    excludedGroups: {type: 'Edm.Guid', nullable: false, collection: true},
    includedGroups: {type: 'Edm.Guid', nullable: false, collection: true},
    overrideDefaultRule: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<OnPremisesConditionalAccessSettings>;