import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { BooleanColumn } from './booleancolumn.entity';
import { BooleanColumnModel } from './booleancolumn.model';
import { BooleanColumnCollection } from './booleancolumn.collection';
//#endregion

export const BooleanColumnConfig = {
  name: "booleanColumn",
  model: BooleanColumnModel,
  collection: BooleanColumnCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<BooleanColumn>;