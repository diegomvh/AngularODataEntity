import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExtensionSchemaProperty } from './extensionschemaproperty.complex';
import { ExtensionSchemaPropertyModel } from './extensionschemaproperty.model';
import { ExtensionSchemaPropertyCollection } from './extensionschemaproperty.collection';
//#endregion

export const ExtensionSchemaPropertyConfig = {
  name: "extensionSchemaProperty",
  model: ExtensionSchemaPropertyModel,
  collection: ExtensionSchemaPropertyCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ExtensionSchemaProperty>;