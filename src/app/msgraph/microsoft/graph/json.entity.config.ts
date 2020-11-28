import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.entity';
import { JsonModel } from './json.model';
import { JsonCollection } from './json.collection';
//#endregion

export const JsonConfig = {
  name: "Json",
  model: JsonModel,
  collection: JsonCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<Json>;