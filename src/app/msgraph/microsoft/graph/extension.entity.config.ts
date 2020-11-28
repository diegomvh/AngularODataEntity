import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Extension } from './extension.entity';
import { ExtensionModel } from './extension.model';
import { ExtensionCollection } from './extension.collection';
//#endregion

export const ExtensionConfig = {
  name: "extension",
  base: "microsoft.graph.entity",
  open: true,
  model: ExtensionModel,
  collection: ExtensionCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<Extension>;