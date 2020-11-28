import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SchemaExtension } from './schemaextension.entity';
import { SchemaExtensionModel } from './schemaextension.model';
import { SchemaExtensionCollection } from './schemaextension.collection';
//#endregion

export const SchemaExtensionConfig = {
  name: "schemaExtension",
  base: "microsoft.graph.entity",
  model: SchemaExtensionModel,
  collection: SchemaExtensionCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    owner: {type: 'Edm.String', nullable: false},
    properties: {type: 'graph.extensionSchemaProperty', nullable: false, collection: true},
    status: {type: 'Edm.String', nullable: false},
    targetTypes: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<SchemaExtension>;