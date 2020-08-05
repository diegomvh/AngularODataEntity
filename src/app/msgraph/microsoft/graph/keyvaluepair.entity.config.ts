import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { KeyValuePair } from './keyvaluepair.entity';
//#endregion

export const KeyValuePairConfig = {
  name: "KeyValuePair",
  annotations: [],
  fields: {
    name: {type: 'Edm.String', nullable: false},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<KeyValuePair>;