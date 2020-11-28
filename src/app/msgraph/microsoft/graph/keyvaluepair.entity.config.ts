import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { KeyValuePair } from './keyvaluepair.entity';
import { KeyValuePairModel } from './keyvaluepair.model';
import { KeyValuePairCollection } from './keyvaluepair.collection';
//#endregion

export const KeyValuePairConfig = {
  name: "keyValuePair",
  model: KeyValuePairModel,
  collection: KeyValuePairCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String', nullable: false},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<KeyValuePair>;