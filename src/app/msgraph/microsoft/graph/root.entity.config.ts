import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Root } from './root.entity';
import { RootModel } from './root.model';
import { RootCollection } from './root.collection';
//#endregion

export const RootConfig = {
  name: "root",
  model: RootModel,
  collection: RootCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<Root>;