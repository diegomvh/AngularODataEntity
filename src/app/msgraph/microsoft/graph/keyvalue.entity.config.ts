import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { KeyValue } from './keyvalue.entity';
//#endregion

export const KeyValueConfig = {
  name: "KeyValue",
  annotations: [],
  fields: {
    key: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<KeyValue>;