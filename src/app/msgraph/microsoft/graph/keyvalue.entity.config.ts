import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.entity';
import { KeyValueModel } from './keyvalue.model';
import { KeyValueCollection } from './keyvalue.collection';
//#endregion

export const KeyValueConfig = {
  name: "keyValue",
  model: KeyValueModel,
  collection: KeyValueCollection,
  annotations: [],
  fields: {
    key: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<KeyValue>;