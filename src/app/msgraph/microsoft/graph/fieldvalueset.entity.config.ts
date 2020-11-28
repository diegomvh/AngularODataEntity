import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FieldValueSet } from './fieldvalueset.entity';
import { FieldValueSetModel } from './fieldvalueset.model';
import { FieldValueSetCollection } from './fieldvalueset.collection';
//#endregion

export const FieldValueSetConfig = {
  name: "fieldValueSet",
  base: "microsoft.graph.entity",
  open: true,
  model: FieldValueSetModel,
  collection: FieldValueSetCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<FieldValueSet>;