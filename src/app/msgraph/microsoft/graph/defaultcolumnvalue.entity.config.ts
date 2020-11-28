import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefaultColumnValue } from './defaultcolumnvalue.entity';
import { DefaultColumnValueModel } from './defaultcolumnvalue.model';
import { DefaultColumnValueCollection } from './defaultcolumnvalue.collection';
//#endregion

export const DefaultColumnValueConfig = {
  name: "defaultColumnValue",
  model: DefaultColumnValueModel,
  collection: DefaultColumnValueCollection,
  annotations: [],
  fields: {
    formula: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<DefaultColumnValue>;