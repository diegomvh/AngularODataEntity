import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExtensionSchemaProperty } from './extensionschemaproperty.entity';
//#endregion

export const ExtensionSchemaPropertyConfig = {
  name: "ExtensionSchemaProperty",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<ExtensionSchemaProperty>;