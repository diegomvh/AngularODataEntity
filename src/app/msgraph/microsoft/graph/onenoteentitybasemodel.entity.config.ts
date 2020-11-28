import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
import { OnenoteEntityBaseModelModel } from './onenoteentitybasemodel.model';
import { OnenoteEntityBaseModelCollection } from './onenoteentitybasemodel.collection';
//#endregion

export const OnenoteEntityBaseModelConfig = {
  name: "onenoteEntityBaseModel",
  base: "microsoft.graph.entity",
  model: OnenoteEntityBaseModelModel,
  collection: OnenoteEntityBaseModelCollection,
  annotations: [],
  fields: {
    self: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteEntityBaseModel>;