import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefaultColumnValue } from './defaultcolumnvalue.entity';
//#endregion

export const DefaultColumnValueConfig = {
  name: "DefaultColumnValue",
  annotations: [],
  fields: {
    formula: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<DefaultColumnValue>;