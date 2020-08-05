import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
//#endregion

export const OnPremisesConditionalAccessSettingsConfig = {
  name: "onPremisesConditionalAccessSettings",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    enabled: {type: 'Edm.Boolean', nullable: false},
    includedGroups: {type: 'Edm.Guid', nullable: false, collection: true},
    excludedGroups: {type: 'Edm.Guid', nullable: false, collection: true},
    overrideDefaultRule: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<OnPremisesConditionalAccessSettings>;