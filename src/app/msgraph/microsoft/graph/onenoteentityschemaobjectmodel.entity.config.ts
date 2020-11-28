import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { OnenoteEntitySchemaObjectModelModel } from './onenoteentityschemaobjectmodel.model';
import { OnenoteEntitySchemaObjectModelCollection } from './onenoteentityschemaobjectmodel.collection';
//#endregion

export const OnenoteEntitySchemaObjectModelConfig = {
  name: "onenoteEntitySchemaObjectModel",
  base: "microsoft.graph.onenoteEntityBaseModel",
  model: OnenoteEntitySchemaObjectModelModel,
  collection: OnenoteEntitySchemaObjectModelCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<OnenoteEntitySchemaObjectModel>;