import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ModifiedProperty } from './modifiedproperty.entity';
//#endregion

export const ModifiedPropertyConfig = {
  name: "ModifiedProperty",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    oldValue: {type: 'Edm.String'},
    newValue: {type: 'Edm.String'}
  }
} as EntityConfig<ModifiedProperty>;