import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
//#endregion

export const OnenoteEntitySchemaObjectModelConfig = {
  name: "onenoteEntitySchemaObjectModel",
  base: "microsoft.graph.onenoteEntityBaseModel",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<OnenoteEntitySchemaObjectModel>;