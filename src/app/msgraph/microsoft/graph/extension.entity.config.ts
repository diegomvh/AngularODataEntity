import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Extension } from './extension.entity';
//#endregion

export const ExtensionConfig = {
  name: "Extension",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<Extension>;