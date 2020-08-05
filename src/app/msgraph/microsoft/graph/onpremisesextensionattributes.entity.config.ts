import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.entity';
//#endregion

export const OnPremisesExtensionAttributesConfig = {
  name: "onPremisesExtensionAttributes",
  annotations: [],
  fields: {
    extensionAttribute1: {type: 'Edm.String'},
    extensionAttribute2: {type: 'Edm.String'},
    extensionAttribute3: {type: 'Edm.String'},
    extensionAttribute4: {type: 'Edm.String'},
    extensionAttribute5: {type: 'Edm.String'},
    extensionAttribute6: {type: 'Edm.String'},
    extensionAttribute7: {type: 'Edm.String'},
    extensionAttribute8: {type: 'Edm.String'},
    extensionAttribute9: {type: 'Edm.String'},
    extensionAttribute10: {type: 'Edm.String'},
    extensionAttribute11: {type: 'Edm.String'},
    extensionAttribute12: {type: 'Edm.String'},
    extensionAttribute13: {type: 'Edm.String'},
    extensionAttribute14: {type: 'Edm.String'},
    extensionAttribute15: {type: 'Edm.String'}
  }
} as EntityConfig<OnPremisesExtensionAttributes>;