import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SchemaExtension } from './schemaextension.entity';
//#endregion

export const SchemaExtensionConfig = {
  name: "schemaExtension",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    targetTypes: {type: 'Edm.String', nullable: false, collection: true},
    properties: {type: 'graph.extensionSchemaProperty', nullable: false, collection: true},
    status: {type: 'Edm.String', nullable: false},
    owner: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<SchemaExtension>;