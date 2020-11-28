import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Json } from './json.complex';
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
} as StructuredTypeConfig<Json>;