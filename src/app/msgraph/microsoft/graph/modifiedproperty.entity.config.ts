import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ModifiedProperty } from './modifiedproperty.entity';
import { ModifiedPropertyModel } from './modifiedproperty.model';
import { ModifiedPropertyCollection } from './modifiedproperty.collection';
//#endregion

export const ModifiedPropertyConfig = {
  name: "modifiedProperty",
  model: ModifiedPropertyModel,
  collection: ModifiedPropertyCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    newValue: {type: 'Edm.String'},
    oldValue: {type: 'Edm.String'}
  }
} as EntityConfig<ModifiedProperty>;